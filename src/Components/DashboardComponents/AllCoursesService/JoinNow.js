import React from 'react'
import Button from '@mui/material/Button';
import Header_wallpaper from '../../../Images/Header_wallpaper.png'

function JoinNow() {
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
      

        <div className='thirdBoxOfJoinNow'>
        <Button variant="contained">JOIN NOW</Button>
        </div> 

        <div className='headerWallpaper'>
          <img src={Header_wallpaper} alt="video" height='45%' width='100%'/>
        </div>

        <div className='aboutBatch'>
          <h1> This Batch Includes </h1>
          <div className='aboutBatchPara'>
          <div>1. Online Lectures</div>
          <div>2. DPPs and Test with Solutions</div>
          <div>3. Online Counceling</div>
          <div>4. One to one support </div>
          <div>5. 3 Days schedule classes</div>
          </div>
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
      </div>
    </div>
  )
}

export default JoinNow
