import React, { Fragment } from 'react'
import styles from './navbar.module.scss'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { SlideMenu } from '../slideMenu/SlideMenu'

export const NavBar = () => {

    return (
        <Fragment>
            <SlideMenu />
            <header className={styles.NavBarContainer}>
                <img src={logo} alt="Ego Logo" className={styles.logo} />
                <div className={styles.NavBar}>
                    <NavLink
                        className={styles.navBarModels} activeClassName={styles.activeLink} to='/'>Modelos
                    </NavLink>
                    <NavLink className={styles.navDataSheet} activeClassName={styles.activeLink} to='/datasheet/1'>Ficha de modelo</NavLink>
                </div>
                <div className={styles.navMenu}>
                    <p>Menu</p>
                </div>
            </header>
        </Fragment>
    )
}