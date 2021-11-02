import React from 'react';
import 'boxicons';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo_content}>
                <div className={styles.logo}>
                    <i className='bx bxl-c-plus-plus'></i>
                    <div className={styles.logo_name}>CodingLab</div>
                </div>
                <div className={styles['collapse-navbar']}>
                    <i className='bx bx-menu' id='btn' ></i>
                </div>
            </div>
            <ul className={styles.nav_list}>

                <li>
                    <div className={styles.search}><i className='bx bx-search' ></i></div>
                    <input type='text' placeholder='Search' ></input>
                    {/* <span className={styles.tooltrip}>
                            Dashboard
                        </span> */}
                </li>
                <li>
                    <a href='/'>
                        <i className='bx bxs-dashboard' ></i>
                        <span className={styles.links_name}>
                            Dashboard
                        </span>
                        {/* <span className={styles.tooltrip}>
                            Dashboard
                        </span> */}
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <i className='bx bxs-user' ></i>
                        <span className={styles.links_name}>
                            User
                        </span>
                        {/* <span className={styles.tooltrip}>
                            User
                        </span> */}
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <i className='bx bx-chat' ></i>
                        <span className={styles.links_name}>
                            Messages
                        </span>
                        {/* <span className={styles.tooltrip}>
                            Messages
                        </span> */}
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <i className='bx bx-pie-chart-alt-2' ></i>
                        <span className={styles.links_name}>
                            Analytics
                        </span>
                        {/* <span className={styles.tooltrip}>
                            Analytics
                        </span> */}
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <i className='bx bx-folder' ></i>
                        <span className={styles.links_name}>
                            File Manager
                        </span>
                        {/* <span className={styles.tooltrip}>
                            File Manager
                        </span> */}
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <i className='bx bx-cart' ></i>
                        <span className={styles.links_name}>
                            Order
                        </span>
                        {/* <span className={styles.tooltrip}>
                            Order
                        </span> */}
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <i className='bx bx-heart' ></i>
                        <span className={styles.links_name}>
                            Saved
                        </span>
                        {/* <span className={styles.tooltrip}>
                            Saved
                        </span> */}
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <i className='bx bx-cog' ></i>
                        <span className={styles.links_name}>
                            Settings
                        </span>
                        {/* <span className={styles.tooltrip}>
                            Settings
                        </span> */}
                    </a>
                </li>
            </ul>
            <div className={styles.profile_content}>
                <div className={styles.profile}>
                    <div className={styles.profile_detailes}>
                        <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60' alt='user' />
                        <div className={styles.name_job}
                        >
                            <div className={styles.name}>
                                Aman Sahu
                            </div>
                            <div className={styles.job}>
                                Front End Developer
                            </div>
                        </div>
                    </div>
                    <div className={styles.logout}><i className='bx bx-log-out' ></i></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
