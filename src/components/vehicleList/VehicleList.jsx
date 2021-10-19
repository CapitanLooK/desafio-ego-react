import React from 'react'
import { Vehicle } from '../vehicle/Vehicle'
import styles from './vehicleList.module.scss'


export const VehicleList = (props) =>{
    const vehicleListed = props.filterSort.map(
        (vehicle, i) =>(
            <Vehicle {...vehicle} key={i}/>
        )
    )

    return(
        <div className={styles.VehicleListContainer}>
            {vehicleListed}
        </div>
    )
}