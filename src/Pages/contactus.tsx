import React from 'react'


const registration = () => {
  return (
    <form>
      <section className="container my-5">
<section className='container my-5'>
        <div className="row">
          <div className="" style={{ backgroundColor: '#000000', marginLeft: '10px' }}>
          
            <p className="text-center text-white">
             
            </p>
            <h6 className="text-center text-white">Have Questions Contact Us Today</h6>
          </div>
          <div className="col-12 d-flex flex-column justify-content-center  p-4" style={{ backgroundColor: '#ffffff', marginLeft: '10px', marginRight: '10px' }  }>
            <h6>Name</h6>
            <input
              className="form-control w-50 mb-3"
              name="name"
              type="text"
              style={{ border: '2px solid #000' }}
            />
            <h6>Email</h6>
            <input
              className="form-control w-50 mb-3"
              name="email"
              type="email"
              style={{ border: '2px solid #000' }}
            />
            <h6>Inquiry</h6>
            <textarea
              className="form-control w-50 mb-3"
              name="inquiry"
              placeholder="Type your inquiry here"
              rows={5}
              style={{ border: '2px solid #000' }}
            ></textarea>
            <div className="w-50 d-flex justify-content-center">
              <button
                type="submit"
                style={{
                  backgroundColor: '#000000',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                }}
                
              >
                Contact Us
              </button>
            </div>


      </div>
      
          </div>
        </section>
      </section>
    </form>
  );
}
export default registration;