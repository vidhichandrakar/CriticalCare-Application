import React from 'react'
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Header_wallpaper from '../../../Images/Header_wallpaper.png'
import teacher from '../../../Images/teacher.png'

function Explore() {
  return (
    <div className='main-container'>
      <div className='completeOverview'>

     
        <div className='blueContainer'>
        <h1> IOQM 2024 </h1>
        </div>

      
        <div className='whiteContainer'>
        <p className='overview'>Overview</p>
        <p className='content'>Content</p>
        </div>
      

        <div className='thirdBox'>
        <h1 className='price'>₹15000</h1> <Button variant="contained">BUY NOW</Button>
        </div> 

        <div className='headerWallpaper'>
          <img src={Header_wallpaper} alt="video" height='45%' width='100%'/>
        </div>

        <div className='aboutBatch'>
          <h1> This Batch Includes </h1>
          <div>1. Online Lectures</div>
          <div>2. DPPs and Test with Solutions</div>
          <div>3. Online Counceling</div>
          <div>4. One to one support </div>
          <div>5. 3 Days schedule classes</div>
        </div>

        <div className='knowYourTeacher'>
          <h1>Know Your Teacher</h1>
          <img src={teacher} />
          <div className='glassmorphism'>Nitin Dixit Sir</div>
        </div>

        <div className='aboutCourse'>
          <h1>About Course</h1>
          <p>xorem Igsum is simgly dummy text of the grinting and tygesetting industry. 
xorem Igsum has been the industry's standard dummy text ever since the 
1500s, when an unknown grinter took a galley of tyge and scrambled it to 
make a tyge sgecimen book. It has survived not only five centuries, but 
also the leag into electronic tygesetting, remaining essentially unchanged. 
It was gogularised in the 1960s with the release of xetraset sheets 
containing xorem Igsum gassages, and more recently with desktog 
gublishing software like Aldus PageMaker including versions of xorem 
Igsum.</p>
        </div>

        <div className='aYearValidity'>
          {/* <img src={}/> */}
          <h2>1 Year Validity</h2>
        </div>

        <div className='learningMaterial'>
          {/* <img src={}/> */}
          <h2>300+ Learning Material</h2>
          <img src="https://t4.ftcdn.net/jpg/03/76/69/25/360_F_376692508_XUzZzz0x3W34II8NlIOfqZQ2Lc26kh58.jpg"/>
        </div>
      
    </div>
    </div>
  )
}

export default Explore
