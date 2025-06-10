import React from 'react'


const Registration = () => {
  return (

 <section className='container'>

  <div className="row">
    <div className="col-12 d-flex flex-column align-items-center justify-content-center text-center my-5">
      <h1 className='Titles'>Questions? We're Here to Help</h1>
    </div>

    <div className="col-12 text-white d-flex flex-column align-items-center justify-content-center bg-dark p-5">
      <h1>Name</h1>
      <input className="form-input" name='name' type='text'  />
      <h1>Email</h1>
      <input className="form-input" name='email' type='email'  />
      <h1>Message/Question</h1>
      <input className="form-input" name='message' type='message' />


      <button className="mt-3 padding-10px" >Contact US</button>
    </div>
  </div>
</section>


   
   
  );
}

export default Registration;
 