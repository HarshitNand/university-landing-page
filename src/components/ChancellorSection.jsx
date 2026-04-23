import {
  Box,
  Typography,
  Paper,
  Avatar
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function ChancellorSection() {
  const news = [
    {
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      source: "THE TIMES OF INDIA",
      title: "Sanskriti University Ranked Top in Innovation",
      date: "Dec 12, 2024",
    },
    {
      img: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
      source: "HINDUSTAN TIMES",
      title: "New Research Center Inaugurated by Education Minister",
      date: "Nov 28, 2024",
    },
    {
      img: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg",
      source: "EDUCATION WORLD",
      title: "University Wins National Excellence Award 2024",
      date: "Oct 15, 2024",
    },
  ];

  return (
    <Box sx={{ py: 10, background: "#f5f7fb" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>

        {/* 🔥 MAIN GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 2fr", // LEFT small, RIGHT big
            },
            gap: 4,
            alignItems: "stretch", // 👈 SAME HEIGHT
          }}
        >

          {/* 🔥 LEFT SIDE */}
          <Box>
            <Typography variant="h4" fontWeight="bold" mb={3} mx={4}>
              Chancellor's Desk
            </Typography>

            <Paper
              sx={{
                p: 3,
                height: "100%", // 👈 MATCH HEIGHT
                borderRadius: 4,
                background: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* TOP */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  sx={{ width: 60, height: 60 }}
                />

                <Box sx={{ flexGrow: 1 }}>
                  <Typography fontWeight="bold">
                    Dr. Sachin Gupta
                  </Typography>
                  <Typography sx={{ fontSize: 13, color: "#777" }}>
                    Chancellor
                  </Typography>
                </Box>

                <FormatQuoteIcon sx={{ color: "#fbc02d", fontSize: 40 }} />
              </Box>

              {/* TEXT */}
              <Typography sx={{ mt: 3, color: "#555", lineHeight: 1.6 }}>
                "Our mission is to create an environment that fosters intellectual curiosity and encourages students to challenge the status quo. We are committed to excellence in education and research."
              </Typography>
            </Paper>
          </Box>

          {/* 🔥 RIGHT SIDE */}
          <Box>
            <Typography variant="h4" fontWeight="bold" mb={4}>
              In The News
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2,1fr)",
                  md: "repeat(3,1fr)", // 👈 3 CARDS IN ONE ROW
                },
                gap: 3,
                height: "100%",
              }}
            >
              {news.map((item, i) => (
                <Paper
                  key={i}
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  {/* IMAGE */}
                  <Box
                    component="img"
                    src={item.img}
                    alt="news"
                    sx={{
                      width: "100%",
                      height: 140,
                      objectFit: "cover",
                    }}
                  />

                  {/* CONTENT */}
                  <Box sx={{ p: 2 }}>
                    <Typography
                      sx={{
                        fontSize: 12,
                        color: "#ff9800",
                        fontWeight: "bold",
                      }}
                    >
                      {item.source}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        fontWeight: "bold",
                        fontSize: 14,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography sx={{ mt: 1, fontSize: 12, color: "#888" }}>
                      {item.date}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>

        </Box>

      </Box>
    </Box>
  );
}