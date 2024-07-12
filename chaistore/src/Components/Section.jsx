import React from 'react'
import "../Styles/section.scss"
import {motion} from "framer-motion"

const section = ({h3,text,hasbtn=true,btntxt,imgsrc,imgsize="70%",backgroundcolor,headingcolor,textcolor,btnbgcolor,btncolor}) => {

  const headingoptions={
initial:{
  y:"-100%",
  opacity:0,
},
whileInView:{
  y:0,
  opacity:1
},
transition:{
  delay:0.1,
}
  }

  const textoptions={
    ...headingoptions,
    transition:{
      delay:0.3,
    }
      }


      const btnoptions={
        initial:{
          y:"100%",
          opacity:0,
        },
        whileInView:{
          y:0,
          opacity:1
        },
       
        transition:{
          delay:0.3,
      
        }
          }


          const imgoptions={
            initial:{
            scale:0.1,
              opacity:0,
            },
            whileInView:{
              scale:1,
              opacity:1
            },
           
            transition:{
              delay:0.3,
           
            }
              }
    

  return (
   <section className='section' style={{backgroundColor:backgroundcolor}}>
<div>
    <motion.h3 style={{color:headingcolor}}
   {...headingoptions}
    >{h3}</motion.h3>


   < motion.p style={{color:textcolor}}
    {...textoptions}>
      {text}</motion.p>


    {hasbtn && <motion.button style={{color:btncolor,backgroundColor:btnbgcolor}}  {...btnoptions}>{btntxt}</motion.button>}
    <motion.div  {...imgoptions}>
        <img src={imgsrc} alt='imgsrc' style={{width:imgsize}} />
    </motion.div>
</div>
   </section>
  )
}

export default section