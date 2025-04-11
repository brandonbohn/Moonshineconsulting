import React from 'react'

// return function for how the homepage will have the layout and what will be displayed. Homepage should contain 2 black bacground  that have text to the right and a picture to the left. 
// The first black background should have a picture of a nurse and a dog. The second black background should have a picture of a nurse and a dog. The third black background should have a picture of a nurse and a dog.


export default class Homepage extends React.Component {

render() {
  return (
    <section>
      <div className='container'/>
        <div className='row box'>
          <div className='col-lg-6 col-md-12 bg-dark text-white justify-content-center position-relative'>
            <p className='bubble'></p>
              At moonshine consulting it is our mission to help you achieve financial independence and change your life. We have been where you are at and understand your struggles. It is our goal to connect you with opportunities and to help you achieve financial success by providing you a hand up in a world that seeks to beat you down. Through our educational products and partnerships you will learn the skills to setup a successful passive income with very little work.
            <p/>
            <img src="./images/Trailoftears.jpg" className='img-fluid' alt="mom3" width={400} height={400} />
          </div>
          <div className='col-lg-6 col-md-12 d-flex align-items-center'>
            
          </div>
        </div>

        <div className='row box'>
          <div className='col-12 mt-5 text-center'>
            <h3 className='bubble'>Hi My name is Moonshine. I am the mascot for Moonshine Consulting and I am here to tell you a secret</h3>
          </div>
          <div className='col-12 d-flex justify-content-center my-4'>
            <img src="./images/moonshine.jpg" className='img-fluid' alt="mom3" width={350} height={150} />
          </div>
        </div>

        <div className='row box'>
          <div className='row'>
            <div className='bg-dark text-white box'>
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
            <img src="./images/Calender.png" className="img-fluid pictures mt-4" alt="mom10" width={550} height={650} />
          </div>
        </div>
      
      <div className='col-sm-10 float-start'>
        
      </div>
    </section>
  );
}

}
