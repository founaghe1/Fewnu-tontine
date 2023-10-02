import React from 'react';
import './footerImg.css'
import bggreen from '../../../Assets/bggreen.png';
import bgblue from '../../../Assets/bgblue.png'

const FooterImg = () => {
  return (
    <div className='fixed-bottom'>
        <footer>
            <div className='position-relative'>
                <img src={bggreen} alt="" className='w-100 position-absolute bggreen'/>
                <img src={bgblue} alt="" className='w-100 bgblue position-relative'/>
            </div>
        </footer>
    </div>
  )
}

export default FooterImg