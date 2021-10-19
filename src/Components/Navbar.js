import React from 'react'
import{FaSistrix}from "react-icons/fa";
const Navbar=()=> {
    return (
        <div className="container-fluid">
        <nav className="nav">
             <div className=" h5 d-none d-sm-block">Orders</div> 

            <div className="main">
                <div className="form-group has-search">
                    <span className="form-control-feedback"><FaSistrix size={20}/></span>
                    <input type="text" className="form-control" placeholder="Search Order"/>
                </div>
            </div>
        </nav>
        <div className="row status">
            <div className="col highlight extra-pad-space"><span className="status-active pl-1 pr-0">All</span></div>
              <div className="col extra-pad-space">Pending</div> 
            <div className="col extra-pad-space">Shipped</div>
            <div className="col">Delivered</div>
            <div className="col  d-none d-sm-block">Return</div>
        </div>
       </div>
    )
}
export default Navbar;
