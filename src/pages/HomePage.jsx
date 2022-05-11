import React from 'react'
import Catagory from '../components/catagories/Catagory'
import Popular from '../components/popular/Popular'
import Search from '../components/search/Search'
import Big from '../components/big/Big'
import FoodDetail from '../components/detail/FoodDetail'

const HomePage = () => {
  return (
    <div>
        <Search />
        <Catagory />
        <Popular/>
        <Big />
        <FoodDetail />
    </div>
  )
}

export default HomePage