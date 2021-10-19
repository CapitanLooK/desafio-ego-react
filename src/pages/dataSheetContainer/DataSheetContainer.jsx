import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { useParams } from 'react-router'
import { DataSheet } from '../../components/dataSheet/DataSheet'

export const DataSheetContainer = () =>{
    const params = useParams()
    const [dataSheetData, setDataSheetData] = useState({})

        useEffect(() => {
        Axios({
            url: `https://challenge.agenciaego.tech/api/models/${params.id}`,
        })
            .then(response => {
                setDataSheetData(response.data)
            })

    }, [])

    return(
        <div>
            {<DataSheet {...dataSheetData}/>}
        </div>
    )
}