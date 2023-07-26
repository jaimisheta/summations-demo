import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { doi } = req.query;

  if (!doi || typeof doi !== "string") {
    return res.status(400).json({ error: "Please provide a valid DOI (Digital Object Identifier)." });
  }

  try {
    const response = await axios.get(`https://api.openalex.org/works/https://doi.org/${doi}`);

    if (response.status !== 200) {
      return res.status(500).json({ error: "Failed to retrive the abstract. Please try again later." });
    }

    const abstract = response.data?.abstract_inverted_index ?? "";

    if (!abstract) {
      return res.status(404).json({ error: "Abstract not found for the provided DOI." });
    }

    res.status(200).json({ abstract });
  } catch (error) {
    console.error("Error fetching abstract:", error);
    return res.status(500).json({ error: "Failed to retrive the abstract. Please try again later." });
  }
}
