import "./Styles/App.scss";
import IntroVideo from "./Components/IntroVideo"
import Section from "./Components/Section";
import freshtopicimg from "./assets/academy.png";
import freshtopic2img from "./assets/story.png";
import tedtalksimg from "./assets/in-the-news.gif";

import franchiseimg from "./assets/franchise.gif";
import mapimg from "./assets/locations.png";
import coursesimg from "./assets/image2.png";
import albumimg from "./assets/mba-cares.gif";
import baratimg from "./assets/image1.png";
import chaiwalaimg from "./assets/image3.png";
import Footer from "./Components/Footer.jsx";

import "./Styles/mediaQuery.scss"

import "./Components/Misc.jsx"




import data from "./data/data.json";
import Misc from "./Components/Misc.jsx";



const yellow= "#fff100",pink="#ed1e79",white=" #fff",brown="#6d3d0f"


function App() {

  const{freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala}=data;
  return (
   <>
   <  IntroVideo  />

   {/*fresh topic*/}
   <Section h3={freshTopic.heading}
    text={freshTopic.text}
     btntxt={freshTopic.btn} 
     imgsrc={freshtopicimg}
   backgroundcolor={pink}
   headingcolor={yellow}
   textcolor={yellow}
   btnbgcolor={yellow}
   btncolor={pink}
   />

    {/*fresh topic2*/}
    <Section h3={freshTopic2.heading}
    text={freshTopic2.text}
     btntxt={freshTopic2.btn} 
     imgsrc={freshtopic2img}
   backgroundcolor={white}
   headingcolor={brown}
   textcolor={pink}
   btnbgcolor={yellow}
   btncolor={pink}
   />

   {/*TED TALKS*/}
   <Section h3={tedTalks.heading}
    text={tedTalks.text}
     btntxt={tedTalks.btn} 
     imgsrc={tedtalksimg}
   backgroundcolor={pink}
   headingcolor={yellow}
   textcolor={yellow}
   btnbgcolor={yellow}
   btncolor={pink}
   />

   {/*franchise*/}
   <Section h3={franchise.heading}
    text={franchise.text}
     btntxt={franchise.btn} 
     imgsrc={franchiseimg}
   backgroundcolor={white}
   headingcolor={pink}
   textcolor={brown}
   btnbgcolor={brown}
   btncolor={yellow}
   />

   {/*map*/}
   <Section h3={map.heading}
    text={map.text}
    
     imgsrc={mapimg}
   backgroundcolor={pink}
   headingcolor={yellow}
   textcolor={yellow}
  
   hasbtn={false}
   />

   {/*courses*/}
   <Section h3={courses.heading}
    text={courses.text}
     btntxt={courses.btn} 
     imgsrc={coursesimg}
     imgsize={"30%"}
   backgroundcolor={yellow}
   headingcolor={pink}
   textcolor={pink}
   btnbgcolor={pink}
   btncolor={yellow}
   />

   {/*album*/}
   <Section h3={album.heading}
    text={album.text}
     btntxt={album.btn} 
     imgsrc={albumimg}
   backgroundcolor={white}
   headingcolor={pink}
   textcolor={brown}
   btnbgcolor={brown}
   btncolor={yellow}
   />

   {/*barat*/}
   <Section h3={barat.heading}
    text={barat.text}
     btntxt={barat.btn} 
     imgsrc={baratimg}
   backgroundcolor={pink}
   headingcolor={yellow}
   textcolor={yellow}
   btnbgcolor={yellow}
   btncolor={pink}
   />

   {/*chaiwala*/}
   <Section h3={chaiwala.heading}
    text={chaiwala.text}
     btntxt={chaiwala.btn} 
     imgsrc={chaiwalaimg}
   backgroundcolor={white}
   headingcolor={pink}
   textcolor={brown}
   btnbgcolor={yellow}
   btncolor={pink}
   />

  <Footer />
  <Misc />
   </>
  );
}

export default App;
