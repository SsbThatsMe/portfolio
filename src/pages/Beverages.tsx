import { useState } from 'react'
import NavBar from '../components/NavBar'
import MenuItem from '../components/MenuItem'
import data from "../DrinksData.json"
import MenuPopup from '../components/MenuPopup'
import BottomBar from '../components/BottomBar'

const Beverages = () => {
  const [activePopUp, setActivePopUp] = useState(-1)
  var indexTracker = 0;
  return (
    <>
    <title>Samuel Sandberg Bröms - Projects</title>
    <div className='beverage-page-background'>
      <NavBar/>
      {data.map((data) => 
        <div className='vertical-center'>
          <h1 className='menu-type-name'>{data.type}</h1>
          <div className='menu-item-container'>
            {data.items.map((item) => 
              <div>
                <div className='menu-align'>
                  <MenuItem name={item.foodName} cost={item.cost} description={item.description} onClick={(index) => {setActivePopUp(index)}} index={++indexTracker}
                    imageFile={item.images.length > 0 ? "../assets/MenuImages/" + item.images[0] : ""}/>
                </div>
                {activePopUp == indexTracker && 
                  <MenuPopup name={item.foodName} 
                  onClose={() => {setActivePopUp(-1)}} 
                  description={item.description} 
                  images={item.images}></MenuPopup>
                }
              </div>
              )}
            </div>
          </div>)}
      </div>
      <BottomBar/>
    </>
  )
}

export default Beverages