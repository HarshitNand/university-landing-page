import {
  Box,
  Typography,
  Paper,
  Button
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";

export default function WhyChoose() {
  return (
    <Box sx={{ py: 10, background: "#f6f8fc" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>

        {/* HEADING */}
        <Typography align="center" variant="h4" fontWeight="bold">
          Why Choose Sanskriti?
        </Typography>

        <Typography align="center" sx={{ mt: 1, color: "#666" }}>
          Focus on holistic development, global exposure, and industry-aligned curriculum makes us
          the preferred choice.
        </Typography>

        {/* CARDS */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            mt: 6,
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >

          {/* CARD 1 */}
          <Paper
            sx={{
              width: 300,
              p: 3,
              borderRadius: 4,
              background: "linear-gradient(135deg,#1e3c72,#2a5298)",
              color: "#fff"
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Top Reasons <br /> To Join SU
            </Typography>

            {[
              "World-class Infrastructure",
              "Highly Qualified Faculty",
              "Strong Industry Connect",
              "Excellent Placement Record"
            ].map((item, i) => (
              <Box key={i} sx={{ display: "flex", gap: 1, mb: 1 }}>
                <CheckCircleIcon sx={{ color: "#ff9800" }} />
                <Typography>{item}</Typography>
              </Box>
            ))}

            <Button
              fullWidth
              sx={{
                mt: 3,
                borderRadius: "30px",
                fontWeight: "bold",
                color: "#0f2027",
                background: "linear-gradient(45deg,#fbc02d,#ff9800)"
              }}
            >
              Download Brochure
            </Button>
          </Paper>

          {/* CARD 2 */}
          <Paper sx={{ width: 300, borderRadius: 4, overflow: "hidden" }}>
            <Box
              component="img"
              src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg"
              alt="International"
              sx={{
                width: "100%",
                height: 150,
                objectFit: "cover"
              }}
            />

            <Box sx={{ p: 2 }}>
              {/* ICON WITH CIRCLE */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#e3f2fd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1
                }}
              >
                <PublicIcon sx={{ color: "#1976d2" }} />
              </Box>

              <Typography variant="h6" fontWeight="bold">
                30+ International Ties
              </Typography>

              <Typography sx={{ fontSize: 14, color: "#666" }}>
                Collaborations with top universities for global exposure.
              </Typography>
            </Box>
          </Paper>

          {/* CARD 3 */}
          <Paper sx={{ width: 300, borderRadius: 4, overflow: "hidden" }}>
            <Box
              component="img"
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
              alt="Learning"
              sx={{
                width: "100%",
                height: 150,
                objectFit: "cover"
              }}
            />

            <Box sx={{ p: 2 }}>
              {/* ICON WITH CIRCLE */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#faf5b7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1
                }}
              >
                <SchoolIcon sx={{ color: "#d8c91ff0" }} />
              </Box>

              <Typography  variant="h6" fontWeight="bold">
                Interactive Pedagogy
              </Typography>

              <Typography sx={{ fontSize: 14, color: "#666" }}>
                Project-based learning and real-world case studies.
              </Typography>
            </Box>
          </Paper>

        </Box>
      </Box>
    </Box>
  );
}