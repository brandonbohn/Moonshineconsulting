function MainBlog() {
  return (
    <div>
    <h1 className="text-white text-center">Blog Posts </h1>

      <div className="card text-bg-dark mb-3">

 <img src="./images/moonshine.jpg" className="bg-dark img-fluid" alt="mom3"
              width={400}
              height={400} />
            <p className="card-text">
                <small className="text-muted">

                    Posted on {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    <h6>category</h6>
                </small>
            </p>
    <div className="card-body">
        <h5 className="card-title">Blog Post Title </h5>
    

      </div>

      




    </div>
    </div>
  );
}
export default MainBlog;