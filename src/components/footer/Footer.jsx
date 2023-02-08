import React from 'react'

function Footer() {
  return (
    <footer className="text-white text-center text-lg-start" style={{"backgroundColor": "#23242a"}}>

    <div className="container p-4">
      <div className="row mt-4">
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About company</h5>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>


          <div className="mt-4" >
            <a href = "#" type="button" className="btn btn-lg"  style={{"backgroundColor": "#808080","marginRight":"10px"}}><span className="fa fa-facebook-f"></span></a>
            <a href = "#" type="button" className="btn btn-lg" style={{"backgroundColor": "#808080","marginRight":"10px"}}><i className="fa fa-instagram"></i></a>
            <a href = "#" type="button" className="btn btn-lg" style={{"backgroundColor": "#808080","marginRight":"10px"}}><i className="fa fa-google"></i></a>
          </div>
          
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1">Contact Us</h5>

      
          <ul className="fa-ul" style={{"marginLeft": "1.65em"}}>
            <li className="mb-3">
              <span className="fa-li"><i className="fa fa-home"></i></span><span className="ms-1">513 Centre Ave E #125, Airdrie, AB T4B 1P9</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fa fa-envelope"></i></span><span className="ms-1">!! email here !!</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fa fa-phone"></i></span><span className="ms-1">(403) 980 - 2686</span>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>

          <table className="table text-center text-white">
            <tbody className="font-weight-normal">
              <tr>
                <td>Mon - Fri:</td>
                <td>9:30am - 6:00pm</td>
              </tr>
              <tr>
                <td>Saturday:</td>
                <td>9:00am - 6:00pm</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>10:00am - 5:00pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
      © 2023 Copyright: 
      <a className="text-white" href="/"> Romantiko.ca</a>
    </div>
  </footer>
  )
}

export default Footer