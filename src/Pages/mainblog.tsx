import BlogComponent from "../components/blogcomponentengine.tsx";

function MainBlog() {
  return (
    <div>
<div className="mainbox" >

<div className="bg-dark text-white p-4">

<h1 className="text-white text-center">The Care Professional Chronicle </h1>

    <p className="text-center text-white" style={{ fontSize: "24px", marginBottom: "20px" }}>
      Your Trusted Source for Senior Care and Advocacy
    </p>
    <div className="text-center text-white" style={{ fontSize: "20px", marginBottom: "20px" }}>
      {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
    </div>
  
</div>
    
 <div>
 



</div>
       
    <div className="text-center text-white" style={{ marginTop: "20px", marginBottom: "20px" }}>
       
        
     <h1>Top Stories</h1>
        <p>Stay informed with the latest updates on senior care policies that effect you and your loved ones</p>
<div  >
<BlogComponent id={2} />  
  </div>  
      </div>

    
                <section>
                
               
                    <div className="text-center mb-4 text-white">

                      <h1>Health and Wellness</h1>
                      <p>Explore our latest articles on health and wellness for seniors, covering topics from nutrition to mental health.</p>
                    </div>
                     <BlogComponent id={3} />
                    <div>
                      <div>
                       
                    </div>
                    </div>
                    
<div className="text-center mb-4 text-white">
<h1>Moonshines Corner</h1>
<p>Join Moonshine, our lovable mascot, as he shares heartwarming inverviews with therapy animals.</p>
</div>
<div>
<BlogComponent id={1} />
</div>


                </section>
        




    </div>
    </div>
  );
}
export default MainBlog;