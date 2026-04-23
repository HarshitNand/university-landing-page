import { Box, Typography, Button, Paper } from "@mui/material";

export default function StoriesSection() {
  const stories = [
    {
      category: "CULTURE",
      date: "15 Sep 2024",
      title: "Harmony in Diversity: Annual Cultural Fest",
      img: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    },
    {
      category: "SPORTS",
      date: "20 Nov 2024",
      title: "Championship Victory: Football Finals",
      img: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6",
    },
    {
      category: "INNOVATION",
      date: "05 Dec 2024",
      title: "Innovation Fair: Robotics & AI",
      img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    },
  ];

  const filters = ["All", "Academics", "Culture", "Sports", "Innovation"];

  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
        background: "linear-gradient(135deg,#07142b,#0b1f3a,#0d2545)",
        color: "#fff",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>

        {/* TOP HEADING */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 6, flexWrap: "wrap", gap: 2 }}>
          <Typography variant="h3" fontWeight="bold">
            Stories &{" "}
            <span style={{ color: "#4fc3f7" }}>Highlights.</span>
          </Typography>

          {/* FILTER BUTTONS */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {filters.map((item, i) => (
              <Button
                key={i}
                sx={{
                 minWidth:"96px",
                  borderRadius: "25px",
                  px: 3,
                  textTransform: "none",
                  color: "#fff",
                  background: i === 0
                    ? "linear-gradient(45deg,#7b61ff,#5ac8fa)"
                    : "rgba(255,255,255,0.08)",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Box>

        {/* MAIN CONTENT */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >

          {/* LEFT BIG CARD */}
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                height: "420px",
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1540575467063-178a50c2df87)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* DARK OVERLAY */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                }}
              />

              {/* TEXT */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 40,
                  left: 20,
                }}
              >
                <Typography
                  sx={{
                    background: "#ff9800",
                    display: "inline-block",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "10px",
                    fontSize: "12px",
                    mb: 1,
                  }}
                >
                  Featured
                </Typography>

                <Typography variant="h3" fontWeight="bold">
                  Global Leadership Summit 2024: Shaping the Future
                </Typography>

                <Typography sx={{ mt: 1, opacity: 0.8 }}>
                  Delegates from over 30 countries gathered to discuss
                  sustainable development goals.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>

            {stories.map((item, i) => (
              <Paper
                key={i}
                sx={{
                  display: "flex",
                  gap: 2,
                  p: 2,
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                }}
              >
                {/* IMAGE LEFT */}
                <Box
                  sx={{
                    width: 100,
                    height: 80,
                    borderRadius: "10px",
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* TEXT RIGHT */}
                <Box>
                  {/* TOP */}
                  <Typography sx={{ fontSize: "12px", opacity: 0.7 }}>
                    {item.category} • {item.date}
                  </Typography>

                  {/* MIDDLE */}
                  <Typography fontWeight="bold">
                    {item.title}
                  </Typography>

                  {/* BOTTOM */}
                  <Typography sx={{ fontSize: "13px", mt: 0.5, opacity: 0.8 }}>
                    Read more →
                  </Typography>
                </Box>
              </Paper>
            ))}

          </Box>
        </Box>

      </Box>
    </Box>
  );
}