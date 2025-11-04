import NavBar from '../components/NavBar'


const Home = () => {
  return (
    <>
      <title>Samuel Sandberg Bröms - Home</title>
      <NavBar/>
      <div className='banner-keeper'>
        <div className='banner-animator'>
          <img className="banner" src=".\src\assets\SemlaWide.jpg" alt="Semla" />
          <h1 className='banner-text'>Sam's Diner</h1>
        </div>
      </div>
      <div className='home-content-keeper'>
        <div className='home-content'>
          <p>Hello and welcome to Sam's diner. </p>
        </div>
      </div>
    </>
  )
}

export default Home

//<h1 className='banner-text'>Samuel Sandberg Bröms</h1>