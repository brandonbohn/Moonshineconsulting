import BlogComponent from "../components/blogcomponentengine.tsx";
import '../css/mainblog.css';
import '../css/mainblog.css';
function MainBlog() {


  return (
    <section className="container columns px-0 align-items-start d-flex Dabox ">
      <div className=" ">
      <div className=" p-4 d-flex cards ">
        <div>
 <h1 className="text-center " style={{ fontSize: "84px", marginBottom: "20px", }}>The Care Professional Chronicle </h1>
       
        <div className="text-right text-white" style={{ fontSize: "20px", marginBottom: "20px" }}>
        {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
          
        </div>
       
         <p className=" text-white">
        Your Trusted Source for Senior Care and Advocacy
        </p>
      </div>

      <div />

      <div className="container-fluid my-4  d-flex justify-content-between-space">
        <div className="row">
        <div className="col-3 col-md-10 col-lg-8">
          <div className=" mb-4">
          <h1 className="text-center">Top Stories</h1>
          <p>Stay informed with the latest updates on senior care policies that effect you and your loved ones</p>
          </div>
          <div className="col-10">
          <BlogComponent id={2} />
           <div className="text-center mb-4 text-white">
          <h1>Voices In Care </h1>
          <p>where caregivers and professionals  share their insights, stories, and struggles from the field.</p>
          </div>
          <BlogComponent id={3} />
        </div>
          </div>
<div className="col-12 col-md-10 col-lg-8">
          <div className="text-center mb-4 ">
          <h1>Moonshines Corner</h1>
          <p>Join Moonshine, our lovable mascot, as he shares heartwarming inverviews with therapy animals.</p>
          </div>
          <BlogComponent id={1} />
        </div>
          
        </div>
        </div>
      </div>

      <div className="container-fluid my-4">
        <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
         
        </div>
        <div className="row justify-content-center mt-5">
        
        </div>
      </div>
      </div>
    </section>
  );
}
export default MainBlog;