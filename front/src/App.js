import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import PostFrontToBack from './Component/postWithUpload_frontToBack';
import ListTous from './Component/ListTous'
//import AfficheProfil from './Component/AfficheProfil'
import Login from './Component/login'
import Register from './Component/Register'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline
  } from "mdbreact";

 class App extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div>
    
      <Router>
        <div>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand exact to='/'>
          
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          {/* <MDBNavItem>
              <MDBNavLink to="/">Admin</MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBNavLink to="/profil">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login">Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/register">Register</MDBNavLink>
            </MDBNavItem>
           
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

        <Route  path="/admin"  component={PostFrontToBack} ></Route>
        <Route path="/login"  component={Login} ></Route>
        <Route path="/profil"  component={ListTous} ></Route>
        <Route path="/register"  component={Register} ></Route>
   
    </div>
    </Router>
<div >
<footer class="page-footer font-small teal pt-4 fixe">

  <div class="container-fluid text-center text-md-left">

    <div class="row">

      <div class="col-md-6 mt-md-0 mt-3">

        <h5 class="text-uppercase font-weight-bold">E-commerce </h5>
       

      </div>


      <hr class="clearfix w-100 d-md-none pb-3"/>


      <div class="col-md-6 mb-md-0 mb-3">


        <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
          commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
          excepturi hic.</p>

      </div>


  </div>

  <div class="footer-copyright text-center py-3">© 2019 Copyright
  </div>
  </div>
</footer>
</div>
</div>
   
    )
  }
}
export default App;