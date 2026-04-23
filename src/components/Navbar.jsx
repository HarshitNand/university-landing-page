import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // 🔥 MENU WITH TARGET IDs
  const menuItems = [
    { label: "About Us", id: "home" },
    { label: "Academics", id: "stories" },
    { label: "Admissions", id: "updates" },
    { label: "International", id: "why" },
    { label: "Life @ SU", id: "chancellor" },
    { label: "Placement", id: "testimonials" },
    { label: "Research", id: "research" },
  ];

  // 🔥 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 SCROLL FUNCTION
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // adjust for navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(12,20,40,0.85)"
          : "rgba(12,20,40,0.3)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.1)"
          : "none",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "70px !important",
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* 🔥 LOGO */}
        <Typography
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => handleScrollTo("home")}
        >
          Sanskriti University
        </Typography>

        {/* 🔥 MENU */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {menuItems.map((item, i) => (
            <Button
              key={i}
              onClick={() => handleScrollTo(item.id)}
              sx={{
                color: "#fff",
                textTransform: "none",
                fontSize: "14px",
                position: "relative",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: 0,
                  left: 0,
                  background: "#ff9800",
                  transition: "0.3s",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {item.label}
            </Button>
          ))}

          {/* 🔥 APPLY BUTTON */}
          <Button
            onClick={() => handleScrollTo("updates")}
            sx={{
              ml: 2,
              px: 3,
              py: 1,
              borderRadius: "30px",
              fontWeight: "bold",
              color: "#000",
              textTransform: "none",
              background: "linear-gradient(45deg,#fbc02d,#ff9800)",
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}