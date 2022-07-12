import Popular from '../components/popular/Popular'
import Big from '../components/big/Big'
import Slider from '../components/slider/Slider'
import Dress from '../components/dress/Dress'
import { useEffect } from 'react'
import Show from '../components/show/Show'

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <Slider />
        {/* <Search />
        <Catagory /> */}
        <Popular/>
        <Show />
        <Big />
        <Dress />
    </div>
  )
}

export default HomePage