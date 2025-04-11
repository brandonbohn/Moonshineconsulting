import React from 'react'

// return function for how the homepage will have the layout and what will be displayed. Homepage should contain 2 black bacground  that have text to the right and a picture to the left. 
// The first black background should have a picture of a nurse and a dog. The second black background should have a picture of a nurse and a dog. The third black background should have a picture of a nurse and a dog.


export default class Homepage extends React.Component {

render() {
  return (
<section>
 
    <div className='row'>
      <div className='col-12 d-flex justify-content-center my-5 missionstatement'>
        <div align='center'>
          <div className="card bg-dark text-center missionstatement" 
     style={{ width: 'auto', height: 'auto', alignContent: 'center', padding: 'auto', margin: 'auto' }}>
            <div className='col-12 d-flex my-5' style={{ width: 'auto', height: 'auto', padding: 'auto', alignContent: 'center', margin: 'auto' }}>
<img src= "./images/Trailoftears.jpg" className="card-img-top" alt="trail of tears" style={{ width: 'auto', height: 'auto', padding: 'auto',}}/>
            </div>
           
            
            <div className="card-body">
              <div className='textstyle'>

                 <p className="card-text bubble  "style={{ width:'500px', height:'auto',  padding: '50px', alignContent: 'center', margin: 'auto', right:'80px'}}>At moonshine consulting it is our mission to help you achieve financial independence and change your life. We have been where you are at and understand your struggles. It is our goal to connect you with opportunities and to help you achieve financial success by providing you a hand up in a world that seeks to beat you down. Through our educational products and partnerships you will learn the skills to setup a successful passive income with very little work.</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>

 
     <div className='row box'>
      <div className='col-12 d-flex justify-content-center my-4 text-align-center missionstatement'>

        <h3 className='bubble text-center'>Hi My Name is Moonshine and I am the mascot of Moonshine consulting and I am here to you a little secret</h3>
      </div>
      
      <div className='col-12 d-flex justify-content-center my-4'>

         <img src="./images/moonshine.jpg" className='img-fluid' alt="mom3" width='auto' height='auto' />
      </div>
       
      </div>

    <div className='row box'>
      
 <div className="card bg-dark" style={{ width: 'auto', height: 'auto', alignContent: 'center', margin: 'auto',padding: 'auto' }}>
      <div>
        
      </div>
      <div className='card-body' style={{ width: 'auto', height: 'auto', padding: 'auto', alignContent: 'center', margin: 'auto' }}>
      <p className='bubble box'>Like you my mother has worked hard all her life and has gave her all to everybody including her family. My mom is a very loving, caring lifelong nurse that will do anything for people and of course spend money on me. However, last month my mom finally found a way to retire comfortably and enjoy her golden years. She also found selfworth and a new passion and lease on life. How did she do it you ask? She learned at the button that says learn. This button made her life better and helped her develop her selfworth and confidence. Now you can too by clicking the buttons below. Uh oh. Her comes Mom I had better go before I get into trouble and get grounded from my doggy treats!</p>
      </div>
    
    </div>
      <div className="row text-center">
        <div className="d-flex justify-content-between w-100">
          <a href='https://pages.inspireanx.com/genesis-options-2'>
            <button type='button' className="btn btn-warning btn-lg">Learn today</button>
          </a>
          <a href='https://www.scalingwithhighticket.com/'>
            <button className="btn btn-warning btn-lg">Make Money Now</button>
          </a>      
        </div>
        <img src="./images/Calender.png" className="  mt-4 justify-content-center my-4" style={{width:'500px',alignContent:'center'}} alt='calender'/>
      </div>
    </div>
  
    <div className='col-sm-10 float-start'>
    </div>
 
</section>
  );
}

}
