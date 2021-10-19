import React from 'react'
import { Link } from 'react-router-dom'
import styles from './vehicle.module.scss'

export const Vehicle = ({ id, name, year, price, thumbnail }) => {


    return (

        <div className={styles.vehicleContainer}>
            <h3 className={styles.vehicleTitle}>{name}</h3>
            <p className={styles.vehiclePriceYear}>{year} | {price}</p>
            <img src={thumbnail} alt={name} className={styles.vehicleImg} />
            <div className={styles.vehicleLink}>
                <Link to={`datasheet/${id}`}>
                    <p>Ver modelo</p>
                </Link>
            </div>
        </div>

    )
}