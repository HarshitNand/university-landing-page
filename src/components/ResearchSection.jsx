import { Box, Typography, Paper } from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
import MemoryIcon from "@mui/icons-material/Memory";
import BiotechIcon from "@mui/icons-material/Biotech";
import HubIcon from "@mui/icons-material/Hub";

export default function ResearchSection() {
  const stats = [
    {
      icon: <ScienceIcon sx={{ color: "#1976d2" }} />,
      num: "2,500+",
      label: "Research Papers",
    },
    {
      icon: <MemoryIcon sx={{ color: "#7b1fa2" }} />,
      num: "2,700+",
      label: "Patents Filed",
    },
    {
      icon: <HubIcon sx={{ color: "#ff9800" }} />,
      num: "30+",
      label: "Projects",
    },
    {
      icon: <BiotechIcon sx={{ color: "#2e7d32" }} />,
      num: "12M+",
      label: "Research Grants",
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(135deg,#020617,#07142b,#0b1f3a)",
        color: "#fff",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>

        {/* 🔥 BIG HEADING */}
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ lineHeight: 1.2 }}
        >
          Cutting Edge{" "}
          <span style={{ color: "#4fc3f7" }}>Research.</span>
        </Typography>

        <Typography sx={{ mt: 2, color: "#9aa4b2" }}>
          We push the boundaries of knowledge with interdisciplinary research.
        </Typography>

        {/* 🔥 STATS CARDS (CENTER ALIGN FIXED) */}
        <Box sx={{ display: "flex", gap: 3, mt: 5, flexWrap: "wrap" }}>
          {stats.map((item, i) => (
            <Paper
              key={i}
              sx={{
                flex: "1 1 200px",
                p: 3,
                borderRadius: 3,
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                  background: "rgba(79,195,247,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                {item.icon}
              </Box>

              <Typography variant="h4" fontWeight="bold">
                {item.num}
              </Typography>

              <Typography sx={{ fontSize: 16, color: "#9aa4b2" }}>
                {item.label}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* 🔥 IMAGE SECTION */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            mt: 6,
            flexDirection: { xs: "column", md: "row" },
          }}
        >

          {/* 🔥 BIG CARD */}
          <Box
            sx={{
              flex: 2,
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
              sx={{
                width: "100%",
                height: 320,
                objectFit: "cover",
              }}
            />

            {/* 🔥 OVERLAY BOX */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "rgba(10,25,50,0.6)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                p: 3,
              }}
            >
              {/* ICON TOP */}
              <Box sx={{ mb: 1 }}>
                <ScienceIcon />
              </Box>

              {/* TEXT BELOW */}
              <Typography variant="h4" fontWeight="bold">
                Advanced AI & Robotics
              </Typography>

              <Typography sx={{ color: "#9aa4b2", mt: 1,mb:3 }}>
                Pioneering autonomous systems and machine learning algorithms.
              </Typography>
            </Box>
          </Box>

          {/* 🔥 RIGHT SMALL CARDS */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>

            {/* CARD 1 */}
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg"
                sx={{
                  width: "100%",
                  height: 140,
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(10,25,50,0.6)",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <BiotechIcon />
                  <Typography  variant="h5" fontWeight="bold">Bio-Genetics</Typography>
                </Box>

                <Typography sx={{ fontSize: 13, color: "#9aa4b2",mb:1  }}>
                  Unlocking secrets of genetic science.
                </Typography>
              </Box>
            </Box>

            {/* CARD 2 */}
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
                sx={{
                  width: "100%",
                  height: 140,
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(10,25,50,0.6)",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <MemoryIcon />
                  <Typography  variant="h5" fontWeight="bold">
                    Quantum Computing
                  </Typography>
                </Box>

                <Typography sx={{ fontSize: 13, color: "#9aa4b2",mb:1  }}>
                  Next-gen computing power research.
                </Typography>
              </Box>
            </Box>

          </Box>
        </Box>

      </Box>
    </Box>
  );
}