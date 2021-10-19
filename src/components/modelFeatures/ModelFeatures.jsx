import React, { Fragment } from 'react'
import styles from './modelFeatures.module.scss'

export const ModelFeatures = ({name, description, image}) => {
    return(
        <Fragment>
            <div className={styles.modelFeaturesContainer}>
                <img src={image} alt={name} className={styles.modelFeaturesImg}/>
                <h2 className={styles.modelFeaturesName}>{name}</h2>
                <p className={styles.modelFeaturesDescription}>{description}</p>
            </div>
        </Fragment>
    )
}