import { Box, Typography } from "@mui/material";

export default function Recruiters() {
  const companies = [
    "TCS", "Wipro", "HCL", "IBM",
    "Accenture", "Deloitte", "Capgemini",
    "Cognizant", "Tech Mahindra"
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: 4,
        background: "#1f3c88",
        color: "#fff",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>

        <Typography sx={{ mb: 2, opacity: 0.8 }}>
          Our Top Recruiters
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {companies.map((c, i) => (
            <Typography key={i} sx={{ opacity: 0.8 }}>
              {c}
            </Typography>
          ))}
        </Box>

      </Box>
    </Box>
  );
}