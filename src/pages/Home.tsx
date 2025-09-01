import React from 'react'
import NavBar from '../components/NavBar'


const Home = () => {
  return (
    <>
        <NavBar/>
        <div className='banner-keeper'>
          <img className="banner" src="..\portfolio\src\assets\BannerWide.png" alt="asdf" />
          <img className="banner image-overlay banner-text-name" src="..\portfolio\src\assets\BannerText.png" alt="asdf" />
          <img className="banner image-overlay banner-text-cs" src="..\portfolio\src\assets\BannerTextCS.png" alt="asdf" />
          <img className="banner image-overlay banner-masked" src="..\portfolio\src\assets\BannerMasked.png" alt="asdf" />
        </div>
    </>
  )
}

export default Home

//<h1 className='banner-text'>Samuel Sandberg Bröms</h1>