import React from 'react'
import './css/Banner.css'
import { FaBell } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 p-0 m-0'>
                        <div className='topHeader'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-12 col-md-4'>
                                        <div class="form-group">
                                            <input type="search" name='search' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Search...' />
                                        </div>
                                    </div>

                                    <div className='col-12 col-md-8'>
                                        <div className='icons d-block float-right'>
                                            <FaBell id='topHeaderIcon' />
                                            <FaRegEnvelope id='topHeaderIcon' />
                                            <img src='../img/user.webp' alt='user' height={'30px'} width={'30px'}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
