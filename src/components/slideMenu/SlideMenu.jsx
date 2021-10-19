import React from 'react'
import styles from './slideMenu.module.scss'
import './slide.css'
import { slide as Menu } from "react-burger-menu";
import { NavLink } from 'react-router-dom'

export const SlideMenu = () => {


    return (
      <Menu right> 

      <NavLink to='/'><p className={styles.menuLink}>Modelos</p></NavLink>
      <p className={styles.menuLink}>Servicios y Accesorios</p>
      <p className={styles.menuLink}>Financiación</p>
      <p className={styles.menuLink}>Reviews y Comunidad</p>
      
      <div className={styles.line}></div>

      <p className={styles.menuLink}>Toyota Mobility Service</p>
      <p className={styles.menuLink}>Toyota Gazoo Racing</p>
      <p className={styles.menuLink}>Toyota Híbridos</p>

      <div className={styles.line}></div>

      <p className={styles.menuLink}>Concesionarios</p>
      <p className={styles.menuLink}>Test Drive</p>
      <p className={styles.menuLink}>Contacto</p>

      <div className={styles.line}></div>
    
      <p className={styles.menuLink}>Actividades</p>
      <p className={styles.menuLink}>Servicios al Cliente</p>
      <p className={styles.menuLink}>Ventas Especiales</p>  
      <p className={styles.menuLink}>Innovación</p>
      <p className={styles.menuLink}>Prensa</p>
      <p className={styles.menuLink}>Acerca de...</p>
    
    </Menu>

    )
}