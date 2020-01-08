import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllStations = props => {
  const [stations, setStations] = useState([])
  const [stationName, setStationName] = useState('')
  const [stationAddress, setStationAddress] = useState('')

  const getStations = async () => {
    const resp = await axios.get(`https://localhost:5001/api/Station/`)
    setStations(resp.data)
  }

  useEffect(() => {
    getStations()
  }, [])

  return (
    <>
      <h2>All Stations</h2>
      <section>
        {stations.map(station => {
          return (
            <>
              <h4>Name:{station.stationName}</h4>
              <p>Address:{station.address}</p>
            </>
          )
        })}
      </section>
    </>
  )
}

export default AllStations
