// import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './Components/UI/Navbar'
import FetchAllItems from './Components/fetchItems'
import { Card } from './Components/UI/Card'

function App() {

  const { items, error, loading } = FetchAllItems()

  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  const topRatedItems = items.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 4);

  console.log(topRatedItems)

  return (
    <div>
      <NavBar />
      {/* items should be centered in the grid */}
      <h1 className="mb-4 mt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">Top Rated</h1>
      <div className="items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
      {topRatedItems.map((item) => ( 
        <Card key={item.id} item={item} />
        
      ))}
      </div>
    </div>
  )
}

export default App
