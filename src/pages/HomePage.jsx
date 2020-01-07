import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
  const [stations, setStation] = useState([])

  const getStations = async () => {
    const resp = await axios.get('https://localhost:5001/api/Station')
    setStation(resp.data)
  }
  useEffect(() => {
    getStations()
  }, [])

  return <></>
}
export default HomePage
