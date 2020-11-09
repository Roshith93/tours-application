import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.netlify.app/api/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const removeTour = (id) => {
    console.log(id)
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }
  const getResponse = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setLoading(false)
      setTours(data)
    } catch (error) {
      setLoading(false)
      throw new Error(error)
    }
  }
  useEffect(() => {
    getResponse()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
        </div>
        <button className='btn' onClick={getResponse}>
          Refresh
        </button>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
