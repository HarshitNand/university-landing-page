import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Recruiters from "../components/Recruiters";
import News from "../components/StoriesSection";
import UpdatesSection from "../components/UpdatesSection";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import StoriesSection from "../components/StoriesSection";
import WhyChoose from "../components/WhyChoose"
import ResearchSection from "../components/ResearchSection"
import Testimonials from "../components/Testimonials"
import ChancellorSection from "../components/ChancellorSection"
export default function Home() {
  return (
    <>
    <Box
  sx={{
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
  }}
>
      <Navbar />
      <Box sx={{ height: "70px" }} /> {/* navbar space */}
    <Box id="home">  <Hero />     </Box> 
       <Box id="stories">     <StoriesSection/>  </Box>  
       
       <Box id="updates">  <UpdatesSection/>       </Box> 
      <Recruiters/>
        <Box id="why">  <WhyChoose/>  </Box>
    <Box id="research">  <ResearchSection/>     </Box>  
         <Box id="chancellor"> <ChancellorSection/>    </Box> 
       <Box id="testimonials">   <Testimonials/>    </Box>   
     <Footer />
      </Box>
    </>
  );
}