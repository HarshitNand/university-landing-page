import {
  Box,
  Typography,
  Button,
  Paper,
  TextField,
  MenuItem
} from "@mui/material";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";

export default function Hero() {
  const cards = [
    {
      icon: <EmojiEventsIcon sx={{ color: "#fbc02d" }} />,
      title: "Ranked 8th",
      subtitle: "Engineering Institute in India",
    },
    {
      icon: <WorkspacePremiumIcon sx={{ color: "#1976d2" }} />,
      title: "Ranked 1st",
      subtitle: "Emerging Private University",
    },
    {
      icon: <StarIcon sx={{ color: "#ff9800" }} />,
      title: "AAA+",
      subtitle: "Top Private Engineering College",
    },
    {
      icon: <SchoolIcon sx={{ color: "#4caf50" }} />,
      title: "Ranked 3rd",
      subtitle: "Top Private University",
    },
  ];

  const brands = ["Google", "Microsoft", "Amazon", "Tesla", "NASA"];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
       
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>
        
        {/* TOP HERO */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* LEFT */}
          <Box sx={{ width: { xs: "100%", md: "55%" } }}>
            <Typography variant="h3" fontWeight="bold">
              Crafting <span style={{ color: "#4fc3f7" }}>Visionaries</span>
            </Typography>

            <Typography sx={{ mt: 2, opacity: 0.8 }}>
              An ecosystem of excellence where cutting-edge research meets 
              creative freedom. Redefine what's possible with our 
              interdisciplinary approach.
            </Typography>

            <Box sx={{ display: "flex", gap: 4, mt: 4 }}>
              <Box>
                <Typography variant="h5" fontWeight="bold">500+</Typography>
                <Typography variant="body2" sx={{ opacity: 0.5 }}>Patents</Typography>
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold">98%</Typography>
                <Typography variant="body2" sx={{ opacity: 0.5 }}>Placement Rate</Typography>
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold">#1</Typography>
                <Typography variant="body2" sx={{ opacity: 0.5 }}>In Innovation</Typography>
              </Box>
            </Box>

            {/* ✅ UPDATED BUTTON */}
            <Button
              sx={{
                mt: 4,
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              View Programs
            </Button>
          </Box>

          {/* RIGHT FORM */}
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                width: "100%",
                maxWidth: "520px", // ✅ increased width
                p: 3,
                borderRadius: 3,
              }}
            >
              {/* ✅ UPDATED HEADING */}
              <Typography align="center" sx={{ fontWeight: "bold", color: "#000" }}>
                Admissions Open 2025
              </Typography>

              {/* ✅ SMALLER SUBTEXT */}
              <Typography
                align="center"
                sx={{ mb: 2, fontSize: "13px", color: "#555" }}
              >
                Take the first step towards your career
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField fullWidth label="Name" size="small" />
                <TextField fullWidth label="Mobile" size="small" />
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField fullWidth label="Email" size="small" />
                <TextField fullWidth label="State" size="small" />
              </Box>

              <TextField fullWidth select label="Program" size="small" sx={{ mb: 2 }}>
                <MenuItem>B.Tech</MenuItem>
                <MenuItem>MBA</MenuItem>
              </TextField>

              <Button fullWidth variant="contained">
                Register Now
              </Button>
            </Paper>
          </Box>
        </Box>

        {/* HEADING + BRANDS */}
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Trusted by industry leaders:
          </Typography>

          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            {brands.map((brand, i) => (
              <Typography key={i} sx={{ fontWeight: "bold", opacity: 0.8 }}>
                {brand}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* BOTTOM CARDS */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mt: 4 }}>
          {cards.map((card, index) => (
            <Paper
              key={index}
              sx={{
                flex: "1 1 250px",
                p: 2,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                gap: 2,
                background: "linear-gradient(135deg, #ffffff, #e5aed5dc)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#eef2f7",
                }}
              >
                {card.icon}
              </Box>

              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {card.subtitle}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>

      </Box>
    </Box>
  );
}