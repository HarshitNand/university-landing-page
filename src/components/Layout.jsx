import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {children}
    </Box>
  );
}