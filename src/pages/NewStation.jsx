import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NewStation = () => {
  const [station, setStation] = useState({
    stationName: '',
    address: '',
  })
  const [stationId, setStationId] = useState()
  const [
    wasStationCreatedSuccessfully,
    setWasStationCreatedSuccessfully,
  ] = useState(false)

  const updateStationObject = e => {
    e.persist()
    setStation(prevStation => {
      return {
        ...prevStation,
        [e.target.name]: e.target.value,
      }
    })
  }
  const submitStation = async e => {
    e.preventDefault()
    const isValid = Object.keys(station).reduce((acc, key) => {
      return acc && station[key] !== ''
    }, true)

    if (isValid) {
      const resp = await axios.post('https://localhost:5001/api/Station', {
        ...station,
      })
      if (resp.status === 200) {
        setStationId(resp.data.id)
      }
    }
  }

  useEffect(() => {
    if (stationId) {
      setWasStationCreatedSuccessfully(true)
    }
  }, [stationId])

  return wasStationCreatedSuccessfully ? (
    <Redirect to={`/station/${stationId}`} />
  ) : (
    <div>
      <form onSubmit={submitStation}>
        <input
          type="text"
          placeholder="Station Name"
          value={station.stationName}
          name="stationName"
          onChange={updateStationObject}
        />
        <input
          type="text"
          placeholder="Address"
          value={station.address}
          name="address"
          onChange={updateStationObject}
        />

        <button>CREATE</button>
      </form>
    </div>
  )
}

export default NewStation
