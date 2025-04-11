function Header(){
    return(
      <section>
        <div>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <h1 className="text-white">Moonshine Consulting LLC</h1>
            <div className="container-fluid">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutme">Aboutme</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/registration">Registration</a>
                </li>
              </ul>
            </div>
          </nav>
          <div/>
          <img src="./images/stlouismoon.jpg" className="img-fluid" alt="st louis"
            width="1435px"
            height="436px"
          />
        </div>
      </section>
    )
}
export default Header



  
    
 
    
     
       
      
      
        
     
      