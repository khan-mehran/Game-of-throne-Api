import React from 'react'
import styles from './header.module.css'
import logo from '../images/logo.png'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className={styles.head}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" style={{width:'210px'}}/>
            </div>
            <div className={styles.navbar}>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/fetch'>Fetch</Link>
                    </li>
                    <li>
                        <Link to='/list'>List</Link>
                    </li>
                    <li>
                        <Link to='/todo'>Todo</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.contact_btn}>
                <button>Contact Us</button>
            </div>
        </div>
    )
}
