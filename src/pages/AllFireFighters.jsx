import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllFireFighters = props => {
  const [fireFighters, setFireFighters] = useState([])
  const [fullName, setFullName] = useState('')
  const [stationId, setStationId] = useState('')
  const [rank, setRank] = useState('')
  const getFireFighter = async () => {
    const resp = await axios.get(`https://localhost:5001/api/FireFighter`)
    setFireFighters(resp.data)
  }

  const sendFireFightersToApi = async () => {
    const resp = await axios.post('https://localhost:5001/api/FireFighter', {
      fullName: fullName,
      stationId: parseInt(stationId),
      rank: rank,
    })

    setFireFighters(prev => {
      return [...prev.concat(resp.data)]
    })
  }

  useEffect(() => {
    getFireFighter()
  }, [])

  return (
    <>
      <section>
        <header>New Fire Fighter</header>

        <input
          type="text"
          value={fullName}
          placeholder="Enter Fire Fighter Name"
          onChange={e => setFullName(e.target.value)}
        />
        <input
          type="text"
          value={stationId}
          placeholder="Enter a Station Name"
          onChange={e => setStationId(e.target.value)}
        />
        <input
          type="text"
          value={rank}
          placeholder="Enter a Rank"
          onChange={e => setRank(e.target.value)}
        />

        <button onClick={sendFireFightersToApi}>Create Fire Fighter</button>
      </section>
      <div>
        <header>All Firefighters</header>
        {fireFighters.map(fireFighters => {
          return (
            <>
              <h1>{fireFighters.fullName}</h1>
              <h3>{fireFighters.stationId}</h3>
              <h3>{fireFighters.rank}</h3>
            </>
          )
        })}
      </div>
    </>
  )
}

export default AllFireFighters
