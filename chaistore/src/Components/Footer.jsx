import React from 'react'
import "../Styles/footer.scss"

const Footer = () => {
  return <>
  <footer>
    <h1>
        Let's 
        <br />
        #CONNECTONCUTTINGCHAI!
    </h1>

    <aside>
        <a href='/'  className='footerlink'>Home</a>
        <a href='/story'  className='footerlink'>Story</a>
        <a href='/media'  className='footerlink'>Media</a>
        <a href='/franchise'  className='footerlink'>Franchise</a>
        <a href='/events'  className='footerlink'>Events</a>
        <a href='/chaiwalacares'  className='footerlink'>Chai Wala Cares</a>

 </aside>

 <div>
    <h5>Email</h5>
    <a href="mail:richathakurlive322@gmail.com">richathakurlive322@gmail.com</a>
 </div>

 <div>
    <h5>Phone</h5>
    <a href="Tel:+9875555555">+9875555555</a>
 </div>
  </footer>
  
  <div className='footer'></div>
  </>
}

export default Footer