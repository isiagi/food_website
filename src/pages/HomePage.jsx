import Catagory from '../components/catagories/Catagory'
import Popular from '../components/popular/Popular'
import Search from '../components/search/Search'
import Big from '../components/big/Big'
import Slider from '../components/slider/Slider'
import Dress from '../components/dress/Dress'

const HomePage = () => {
  return (
    <div>
    <Slider />
        {/* <Search />
        <Catagory /> */}
        <Popular/>
        <Big />
        <Dress />
    </div>
  )
}

export default HomePage