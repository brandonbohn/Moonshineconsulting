import React from 'react'


export const Homepage = () => {

  return (
    <div>
      <div className="homepagedefaults container-fluid">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="mainpicture">
          <div className="col-12 col-lg-6">
            <div>
              <img
                src="./images/Trailoftears.jpg"
                className="img-fluid positions"
                alt="mom3"
                align="center"
                width={400}
              />
              <div className="mainbox">
                <h1 className="Titles">Here at Moonshine Consulting</h1>
                <h2 className="text-center">
                  it is our mission to help you achieve financial independence
                  and change your life.
                </h2>

                <p>
                  We have been where you are at and understand your struggles.
                  It is our goal to connect you with opportunities and to help
                  you achieve financial success by providing you a hand up in a
                  world that seeks to beat you down. Through our educational
                  products and partnerships you will learn the skills to set up
                  a successful passive income with very little work.
                </p>
              </div>
            </div>
            <img
              src="./images/business.jpg"
              className="float-begin nursepicture img-fluid positions"
              alt="mom10"
              width={400}
              height={200}
              margin-left="100px"
              align="center"
            ></img>
          </div>
        </div>

        <div className="container-fluid">
          <div className="col-12 col-lg-8"></div>
          <div className="">
            <h3 className="bubble">
              Hi My name is Moonshine. I am the mascot for Moonshine Consulting
              and I am here to tell you a secret
            </h3>
          </div>
          <div></div>
          <div className="col-6">
            <img
              src="./images/moonshine.jpg"
              className="img-fluid positions"
              alt="mom3"
              align="center"
              width={400}
              height={200}
            />
            <div className="">
              <div>
                <div className="mainbox">
                  <h1 className="Titles">My Story</h1>

                  <p className="">
                    Like you my mother has worked hard all her life and has gave
                    her all to everybody including her family. My mom is a very
                    loving, caring lifelong nurse that will do anything for
                    people and of course spend money on me. However, last month
                    my mom finally found a way to retire comfortably and enjoy
                    her golden years. She also found self-worth and a new
                    passion and lease on life. How did she do it you ask? She
                    learned at the button that says learn. This button made her
                    life better and helped her develop her self-worth and
                    confidence. Now you can too by clicking the buttons below.
                    Uh oh. Here comes Mom I had better go before I get into
                    trouble and get grounded from my doggy treats!
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row"></div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="container mt-3">
                <div className="d-grid gap-3">
                  <a href="https://pages.inspireanx.com/genesis-options-2">
                    <button
                      type="button"
                      className="btn btn-warning btn-block btn-lg"
                    >
                      Learn today
                    </button>
                  </a>
                </div>

                <div className="button1">
                  <a href="https://www.scalingwithhighticket.com/">
                    <button className="btn btn-warning btn-block btn-lg">
                      Make Money Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-10 float start">
          <img
            src="./images/Calender.png"
            className="img-fluid pictures"
            alt="mom10"
            width={550}
            height={650}
          />
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .mainpicture img {
              width: 100%;
              height: auto;
            }
            .mainbox {
              text-align: center;
              padding: 10px;
            }
            .Titles {
              font-size: 1.5rem;
            }
            .bubble {
              font-size: 1rem;
            }
          }

          @media (max-width: 576px) {
            .mainpicture img {
              width: 100%;
              height: auto;
            }
            .mainbox {
              padding: 5px;
            }
            .Titles {
              font-size: 1.2rem;
            }
            .bubble {
              font-size: 0.9rem;
            }
            .btn {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </div>
  );

}

export default Homepage
