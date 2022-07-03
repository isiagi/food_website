import Catagory from '../components/catagories/Catagory'
import Popular from '../components/popular/Popular'
import Search from '../components/search/Search'
import Big from '../components/big/Big'
import Slider from '../components/slider/Slider'

const HomePage = () => {
  return (
    <div>
    <Slider />
        {/* <Search />
        <Catagory /> */}
        <Popular/>
        <Big />
    </div>
  )
}

export default HomePage