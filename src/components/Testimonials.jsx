import {
  Box,
  Typography,
  Paper,
  Avatar,
  Button
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Testimonials() {
  const data = [
    {
      name: "Aarav Patel",
      course: "B.Tech CS, 3rd Year",
      text: "The practical exposure here is unmatched. The labs are state-of-the-art and the faculty truly cares about our growth.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Sharma",
      course: "MBA, Final Year",
      text: "Sanskriti University gave me the confidence to lead. The campus life is vibrant and full of opportunities.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohan Gupta",
      course: "B.Sc Biotechnology",
      text: "Amazing infrastructure and supportive environment. I've made friends for life and learned so much.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(135deg,#020617,#0b1f3a,#07142b)",
        color: "#fff",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>

        {/* 🔥 TOP LABEL */}
        <Typography sx={{ color: "#ff9800", fontWeight: "bold", mb: 1 }}>
          TESTIMONIALS
        </Typography>

        {/* 🔥 HEADING */}
        <Typography variant="h3" fontWeight="bold">
          Stories of{" "}
          <span style={{ color: "#ffb74d" }}>Transformation</span>
        </Typography>

        {/* 🔥 ROW: LEFT TEXT + RIGHT FILTER */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* LEFT PARAGRAPH */}
          <Typography sx={{ color: "#9aa4b2", maxWidth: 500 }}>
            Hear from the people who make Sanskriti University a
            vibrant community of learners and achievers.
          </Typography>

          {/* RIGHT BUTTONS */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {["Students", "Parents", "Alumni"].map((item, i) => (
              <Button
                key={i}
                sx={{
                  borderRadius: "20px",
                  px: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                  color: i === 0 ? "#000" : "#fff",
                  background:
                    i === 0
                      ? "linear-gradient(45deg,#fbc02d,#ff9800)"
                      : "rgba(255,255,255,0.1)",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Box>

        {/* 🔥 CARDS */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            mt: 5,
            flexWrap: "wrap",
          }}
        >
          {data.map((item, i) => (
            <Paper
              key={i}
              sx={{
                flex: "1 1 300px",
                p: 3,
                borderRadius: 4,
                background: "#f8f9fb",
                color: "#000",
                position: "relative",
              }}
            >
              {/* QUOTE ICON */}
              <FormatQuoteIcon
                sx={{
                  position: "absolute",
                  top: 15,
                  right: 15,
                  fontSize: 40,
                  color: "#fbc02d",
                  opacity: 0.4,
                }}
              />

              {/* 🔥 AVATAR + STARS COLUMN */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Avatar
                  src={item.img}
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                  }}
                />

                {/* STARS BELOW */}
                <Box>
                  {[1, 2, 3, 4].map((star) => (
                    <StarIcon key={star} sx={{ color: "#ffb400", fontSize: 18 }} />
                  ))}
                </Box>
              </Box>

              {/* TEXT */}
              <Typography sx={{ mt: 2, color: "#444" }}>
                "{item.text}"
              </Typography>

              {/* NAME */}
              <Typography sx={{ mt: 3, fontWeight: "bold" }}>
                {item.name}
              </Typography>

              {/* COURSE */}
              <Typography sx={{ fontSize: 13, color: "#777" }}>
                {item.course}
              </Typography>
            </Paper>
          ))}
        </Box>

      </Box>
    </Box>
  );
}