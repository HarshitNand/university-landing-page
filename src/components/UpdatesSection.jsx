import { Box, Typography, Paper } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function UpdatesSection() {
  const updates = [
    {
      date: "Dec 15, 2024",
      title: "Ph.D. Entrance Exam 2025 Applications Open",
      tag: "Admission",
      color: "#ff4d4f",
    },
    {
      date: "Dec 12, 2024",
      title: "Semester End Examinations Schedule Released",
      tag: "Exam",
      color: "#ff4d4f",
    },
    {
      date: "Dec 10, 2024",
      title: "Winter Break Notification for All Departments",
      tag: "Notice",
      color: "#1890ff",
    },
    {
      date: "Dec 08, 2024",
      title: "Guest Lecture by CEO of TechMahindra - Reg Open",
      tag: "Event",
      color: "#1890ff",
    },
    {
      date: "Dec 05, 2024",
      title: "Library Hours Extended for Exam Preparation",
      tag: "Facility",
      color: "#1890ff",
    },
  ];

  return (
    <Box sx={{ width: "100%", py: 10, background: "#f5f7fb" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>

        <Box
          sx={{
            display: "flex",
            gap: 6,
            flexDirection: { xs: "column", md: "row" },
          }}
        >

          {/* 🔥 LEFT SIDE */}
          <Box sx={{ flex: 1 }}>

            {/* 🔔 HEADING */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  background: "#1976d2",
                  borderRadius: "8px",
                  p: 1,
                  display: "flex",
                }}
              >
                <NotificationsIcon sx={{ color: "#fff", fontSize: 20 }} />
              </Box>

              <Typography variant="h5" fontWeight="bold">
                Latest Updates
              </Typography>
            </Box>

            <Typography sx={{ mb: 4, color: "#666", mt: 1 }}>
              Stay informed with campus news
            </Typography>

            {/* 🔥 TIMELINE */}
            <Box sx={{ position: "relative", pl: 4 }}>

              {/* LINE */}
              <Box
                sx={{
                  position: "absolute",
                  left: "10px",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background: "#ddd",
                }}
              />

              {updates.map((item, i) => (
                <Box key={i} sx={{ mb: 4, position: "relative" }}>

                  {/* DOT */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: "-29px",
                      top: "4px",
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      background: "#fff",
                      border: `3px solid ${item.color}`,
                      boxShadow: "0 0 0 4px rgba(0,0,0,0.05)",
                      zIndex: 2,
                    }}
                  />

                  {/* CONTENT */}
                  <Box sx={{ pl: 4 }}>
                    <Typography sx={{ fontSize: "12px", color: "#888" }}>
                      {item.date}
                    </Typography>

                    <Typography fontWeight="bold">
                      {item.title}
                    </Typography>

                    <Typography sx={{ fontSize: "12px", color: "#999" }}>
                      {item.tag}
                    </Typography>
                  </Box>

                </Box>
              ))}
            </Box>
          </Box>

          {/* 🔥 RIGHT SIDE */}
          <Box sx={{ flex: 1 }}>

            <Typography sx={{ color: "#ff9800", fontWeight: "bold" }}>
              WHY CHOOSE US
            </Typography>

            <Typography variant="h4" fontWeight="bold">
              Excellence in <br />
              <span style={{ color: "#1976d2" }}>
                Every Number
              </span>
            </Typography>

            <Typography sx={{ mt: 2, color: "#666" }}>
              Our commitment to quality education reflects in our achievements.
              Join a community that strives for greatness.
            </Typography>

            {/* 🔥 CARDS */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 3,
                mt: 4,
              }}
            >
              {/* CARD 1 */}
              <Paper sx={{ p: 3, borderRadius: 3, background: "#e3f2fd" }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    background: "linear-gradient(45deg,#1976d2,#42a5f5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  95%
                </Typography>
                <Typography>Placement Rate</Typography>
              </Paper>

              {/* CARD 2 */}
              <Paper sx={{ p: 3, borderRadius: 3, background: "#fff3e0" }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    background: "linear-gradient(45deg,#ff9800,#ffb74d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  54L
                </Typography>
                <Typography>Highest Package</Typography>
              </Paper>

              {/* CARD 3 */}
              <Paper sx={{ p: 3, borderRadius: 3, background: "#f3e5f5" }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    background: "linear-gradient(45deg,#9c27b0,#ce93d8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  2500+
                </Typography>
                <Typography>Research Papers</Typography>
              </Paper>

              {/* CARD 4 */}
              <Paper sx={{ p: 3, borderRadius: 3, background: "#e8f5e9" }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    background: "linear-gradient(45deg,#2e7d32,#66bb6a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  300+
                </Typography>
                <Typography>Recruiters</Typography>
              </Paper>
            </Box>

          </Box>

        </Box>
      </Box>
    </Box>
  );
}