import React, { Fragment } from 'react'
import styles from './dataSheet.module.scss'
import { ModelFeatures } from '../modelFeatures/ModelFeatures'

export const DataSheet = ({name, photo, title, description, model_features, model_hightlights}) =>{
    
    const modelFeatures = model_features?.map(
        (vehicle, i) =>(
            <ModelFeatures {...vehicle} key={i}/>
        )
    )

    const modelHighlights = model_hightlights?.map(
        (vehicle, i) =>(
            <modelHighlights {...vehicle} key={i}/>
        )
    )
    
    return(
        <Fragment>
            <div className={styles.dataSheetContainer}>
                <img src={photo} alt={name} />
                <div className={styles.dataSheetInfo}>
                    <h4 className={styles.dataSheetName}>{name}</h4>
                    <h5 className={styles.dataSheetTitle}>{title}</h5>
                    <p className={styles.dataSheetDescription}>{description}</p>
                </div>
            </div>

            <div className={styles.modelHigh}>
                    {modelFeatures}
                    {modelHighlights}
            </div>
        </Fragment>
    )
}