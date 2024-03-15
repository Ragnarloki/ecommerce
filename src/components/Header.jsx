import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import "../Header.css";

function Header(){
    return(
        <div>
            <nav id="navbar" className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a  className="navbar-brand " id="Company" href="#"><i className="bi bi-amazon "></i>mazon</a>
    <div className="">
    <a className="nav-link text-white " href="#">
            <small className="d-flex mb-0 ">Delivering to Madurai 625016</small> 
            <strong className=""><LuMapPin />Update location</strong>
            </a>
    </div>
    <div className="input-group " style={{width:"400px",marginLeft:"20px"}} >
    <span className="input-group-text" id="basic-addon2">
      <div >
  <a className="text-decoration-none text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    All
  </a>
  <ul className="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div></span>
  <input type="text" className="form-control "  placeholder="Search .." aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span className="input-group-text bg-warning text-dark" id="basic-addon2"><i class="bi bi-search"></i></span>
</div> 
<div style={{marginLeft:"20px"}} >
  <img id="flag" src="Indian-flag68-300x300.png" />
  <a className="text-decoration-none text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    En
  </a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
       
        
      
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">
          <small className="d-flex mb-0">Hello,</small> 
            <strong className="">& sign-up</strong>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            <small className="d-flex mb-0">Return</small> 
            <strong className="">& orders</strong>
            </a>
        </li>
        
        
      </ul>
      <span className="text-white" ><IoCartOutline id="icoCart"/></span>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header;