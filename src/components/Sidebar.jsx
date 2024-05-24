import React from 'react'
import './css/Sidebar.css'
import { NavLink } from 'react-router-dom'
import { AiFillDashboard } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
import { SiTemporal } from "react-icons/si";
import { VscStarEmpty } from "react-icons/vsc";
import { MdContactPhone } from "react-icons/md";


const Sidebar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 m-0 p-0">
                        <div className='sidebar'>
                            <div className='sidebar-top'>
                            <h4 className='text-center text-white pt-3'>E-Commerce</h4>
                            <hr/>
                            </div>
                            <div id='sidebar-bottom'>
                                <nav >
                                    <NavLink to={''} className={'nav'} id="active"> <AiFillDashboard id='icon'/> Dashboard</NavLink>
                                    <NavLink to={''} className={'nav'} > <AiTwotoneHome id='icon'/> Home</NavLink>
                                    <NavLink to={'/pages/AddCategory'} className={'nav'} > <SiTemporal id='icon'/> Category</NavLink>
                                    <NavLink to={''} className={'nav'} > <SiTemporal id='icon'/> Products</NavLink>
                                    <NavLink to={''} className={'nav'} > <VscStarEmpty id='icon'/> Career</NavLink>
                                    <NavLink to={''} className={'nav'} > <MdContactPhone id='icon'/> contact Us</NavLink>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar

