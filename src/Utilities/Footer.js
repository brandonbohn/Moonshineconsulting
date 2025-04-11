import React from 'react'

function footer() {
  return (
    <section>
      <div />
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark text-white gap-4" align="center">
        <div className="footer d-flex justify-content-around w-100 gap-4"> 
          <ul className="navbar-nav w-100 d-flex justify-content-around flex-wrap gap-4">
            
            <li className="nav-item justify-content-center mb-2 mb-sm-0">
              <h4 className="justify-content-around">moonshineconsulting6@gmail.com</h4>
            </li>
            <li className="nav-item mb-2 mb-sm-0">
              <h4 className="justify-content-around">Moonshine Consulting</h4>
            </li>
            <li className="nav-item">
              <h4 className="address">Fredricktown Missouri</h4>
            </li>
          </ul>
        </div>
      </nav>
      <div />
    </section>
  )
}

export default footer