import { useState } from "react";
import { Button, Input, Textarea, useMantineTheme, Paper, LoadingOverlay } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai";
import { BASE_URL } from "../utils/Constants";

const AbstractFetcher = () => {
  const theme = useMantineTheme();
  const [doi, setDoi] = useState<string>("");
  const [abstract, setAbstract] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleDoiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDoi(event.currentTarget.value);
  };

  const handleGetAbstract = async () => {
    setError("");
    setAbstract("");
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/getAbstract?doi=${doi}`);
      const data = await response.json();

      if (response.ok) {
        setAbstract(JSON.stringify(data.abstract));
      } else {
        setError("Failed to retrive the abstract. Please try again later." );
      }
    } catch (error) {
      setError("Failed to retrive the abstract. Please try again later." );
    }

    setLoading(false);
  };

  return (
    <div  style={{ borderRadius: theme.spacing.md, maxWidth: 800, margin: "0 auto", padding: theme.spacing.md }}>
      <Paper shadow="lg" radius="md" style={{ padding: theme.spacing.md,  marginBottom: theme.spacing.md }}>
        <Input.Wrapper label="Enter Digital Object Identifier (DOI)" error={error} >
          <Input
            value={doi}
            onChange={handleDoiChange}
            placeholder="e.g., 00.0000/aaaa"
            style={{ marginBottom: theme.spacing.sm, marginTop: theme.spacing.sm}}
            error={error}
            icon={<AiOutlineSearch />}
            variant="filled"
            size="lg"
          />
        </Input.Wrapper>
        <Button
          onClick={handleGetAbstract}
          fullWidth
          loading={loading}
          color="blue"
          variant="gradient"
          radius="lg"
          style={{ marginTop: theme.spacing.md }}
        >
          {loading ? (
            <LoadingOverlay visible color="light" />
          ) : (
            <span style={{ fontWeight: "bold" }}>Get Abstract</span>
          )}
        </Button>
      </Paper>
      {abstract && (
        <Paper shadow="lg" style={{ padding: theme.spacing.md, height: "auto"}} radius="md">
          <h3 style={{ marginBottom: theme.spacing.md }}>Abstract</h3>
          <Textarea
            value={abstract}
            size="lg"
            autosize
            maxRows={8}
            style={{ resize: "vertical"}}
          />
        </Paper>
      )}
    </div>
  );
};

export default AbstractFetcher;
