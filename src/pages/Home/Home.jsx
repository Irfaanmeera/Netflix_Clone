import Navbar from "../../components/NavBar/Navbar"
import "./Home.css"
import hero_banner from '../../assets/banner.webp'
import hero_title from '../../assets/banner_title.webp'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from "../../components/TitleCards/TitleCards"
import Footer from "../../components/Footer/Footer"



const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img"/>
        <div className="hero-caption">
            <img src={hero_title} alt="" className="caption-img"/>
            <p>In the African Savanna, a young prince overcomes the betrayal and tragedy to assume his rightful place on Pride Rock.</p>
            <div className="hero-btns">
                <button className="btn"><img src={play_icon} alt="" />Play</button>
                <button className="btn dark-btn"><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards/>
        </div>
        <div className="fade_bottom"></div>
      </div>
      <div className="more-cards">
      <TitleCards title={'Blockbuster Movies'} category={'top_rated'}/>
      <TitleCards title={'Only On Netflix'} category={'popular'}/>
      <TitleCards title={'Upcoming'} category={'upcoming'}/>
      <TitleCards title={'Top pics for you'} category={'now_playing'}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home

