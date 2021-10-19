import React, { Fragment} from 'react'
import styles from './filterOptions.module.scss'

export const FilterOptions = (props) => {
    return (
        <Fragment>
            <div>
            <h1 className={styles.DescubrTodosLosM}>Descubri todos los modelos</h1>
            </div>

            <div className={styles.filterOptionContainer}>
                <select onChange={props.handleFilterResponsive} className={styles.FilterOptionSelect}>
                    <option>Filtrar Por</option>
                    <option value="todos">Todos</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Pickups y Comerciales">Pickups y Comerciales</option>
                    <option value="SUVs">SUVs y Crossovers</option>
                </select>

                <div className={styles.filterButtons}>
                    <p className={styles.filtrarFor}>Filtrar Por</p>
                    <button className={styles.filterButton} onClick={() => props.handleFilter("todos")}>Todos</button>
                    <button className={styles.filterButton} onClick={() => props.handleFilter("Sedan")}>Sedan</button>
                    <button className={styles.filterButton} onClick={() => props.handleFilter("Hatchback")}>Hatchback</button>
                    <button className={styles.filterButton} onClick={() => props.handleFilter("Pickups y Comerciales")}>Pickups y Comerciales</button>
                    <button className={styles.filterButton} onClick={() => props.handleFilter("SUVs")}>SUVs y Crossovers</button>
                </div>


            <select onChange={props.handleSort} className={styles.orderOptionSelect}>
                <option>Ordenar por</option>
                <option value="minorToHigher">De menor a mayor precio</option>
                <option value="higherToMinor">De mayor a menor precio</option>
                <option value="newer">Mas nuevos primero</option>
                <option value="older">Mas viejos primero</option>
            </select>
            
            </div>
            <div className={styles.Line}></div>
        </Fragment>
    )
}