import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllStations = props => {
  const [stations, setStations] = useState([])
  const [stationName, setStationName] = useState('')
  const [stationAddress, setStationAddress] = useState('')

  const getStations = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/Station/${props.match.params.id}`
    )
    setStations(resp.data)
  }

  // const sendStudentToApi = async props => {
  //   const resp = await axios.post('https://localhost:5001/api/house', {
  //     houseColor: houseColor,
  //     houseName: houseName,
  //     houseId: props.match.params.id,
  //   })

  //   setHouses(prev => {
  //     return {
  //       ...prev,
  //       studentTables: [...prev.studentTables.concat(resp.data)],
  //     }
  //   })
  // }

  useEffect(() => {
    getStations()
  }, [])

  return (
    <>
      <h2>All Stations</h2>
      <section>
        {stations.map(stations => {
          return (
            <>
              <h4>Name:{stations.stationName}</h4>
              <p>Address:{stations.address}</p>
            </>
          )
        })}
      </section>
    </>
  )
}

export default AllStations
