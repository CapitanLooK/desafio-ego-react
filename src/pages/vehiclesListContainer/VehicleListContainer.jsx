import React, {useEffect, useState, Fragment} from 'react'
import Axios from 'axios'
import { FilterOptions } from '../../components/filterOptions/FilterOptions'
import { VehicleList } from '../../components/vehicleList/VehicleList'

export const VehicleListContainer = () => {

    const [vehiclesData, setVehiclesData] = useState({
        VehicleList: [],
        vehicleFilterList: [],
      })


      useEffect(() => {
        Axios({
            url: "https://challenge.agenciaego.tech/api/models/",
        })
            .then((response) => {
                setVehiclesData({
                    listProduct: response.data,
                    vehicleFilterList: response.data
                })

            })
    }, [])
          
        const handleSort = (e) => {
            const {value} = e.target
    
            const sortedList = vehiclesData.vehicleFilterList.sort((a, b) => {
                switch (value) {
                    case 'minorToHigher':
                        return a.price - b.price
                    case 'higherToMinor':
                        return b.price - a.price
                    case 'newer':
                        return b.year - a.year
                    case 'older':
                        return a.year - b.year
                    default:
                        break
                }
            }
            )
    
            setVehiclesData({
                ...vehiclesData, vehicleFilterList: sortedList
            })

        }
    

        const handleFilter = (value) => {
            const vehicleFilterList = vehiclesData.listProduct.filter (vehicle => vehicle.segment === value || value === "todos")
            setVehiclesData({
              ...vehiclesData, vehicleFilterList 
            })

            
        }
    
        const handleFilterResponsive = (e) => {

            const {value} = e.target 
            
            const vehicleFilterList = vehiclesData.listProduct.filter (vehicle => vehicle.segment === value || value === "todos")
            setVehiclesData({
              ...vehiclesData, vehicleFilterList 
            })
          }
    
    return(
        <Fragment>
            <FilterOptions handleSort={handleSort} handleFilter={handleFilter} handleFilterResponsive={handleFilterResponsive} />
            <VehicleList filterSort={vehiclesData.vehicleFilterList}/>
        </Fragment>
    )
}