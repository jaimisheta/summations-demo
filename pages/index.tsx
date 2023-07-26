import AbstractFetcher from "../components/AbstractFetcher";
import { useMantineTheme } from "@mantine/core";

const HomePage = () => {
  const theme = useMantineTheme();

  return (
    <div>
      <h1 style={{ maxWidth: 800, margin: "0 auto", padding: theme.spacing.md, textAlign: "center", color: "blue" }}>OpenAlex Abstract Fetcher</h1>
      <AbstractFetcher />
    </div>
  );
};

export default HomePage;
