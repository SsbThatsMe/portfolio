import React from 'react'
import NavBar from '../components/NavBar'


const Home = () => {
  return (
    <>
      <title>Samuel Sandberg Bröms - Home</title>
      <NavBar/>
      <div className='banner-keeper'>
        <div className='banner-animator'>
          <img className="banner" src="..\portfolio\src\assets\BannerWide.png" alt="asdf" />
          <img className="banner image-overlay banner-text-name" src="..\portfolio\src\assets\BannerText.png" alt="asdf" />
          <img className="banner image-overlay banner-text-cs" src="..\portfolio\src\assets\BannerTextCS.png" alt="asdf" />
          <img className="banner image-overlay banner-text-3d" src="..\portfolio\src\assets\BannerText3D.png" alt="asdf" />
          <img className="banner image-overlay banner-masked" src="..\portfolio\src\assets\BannerMasked.png" alt="asdf" />
        </div>
      </div>
      <div className='home-content-keeper'>
        <div className='home-content'>
          <p>Hi, I am Samuel Sandberg Bröms, a computer scientist and game developer with a passion for creating interactive worlds.</p>
        </div>
      </div>
    </>
  )
}

export default Home

//<h1 className='banner-text'>Samuel Sandberg Bröms</h1>