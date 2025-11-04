import { useState } from 'react'
import NavBar from '../components/NavBar'
import MenuItem from '../components/MenuItem'
import data from "../MenuData.json"
import MenuPopup from '../components/MenuPopup'

const Menu = () => {
  const [activePopUp, setActivePopUp] = useState(-1)
  var indexTracker = 0;
  return (
    <>
    <title>Samuel Sandberg Bröms - Projects</title>
    <div className='menu-page-background'>
      <NavBar/>
      <div className='menu'>
      {data.map((data) => 
        <div className='vertical-center'>
          <h1 className='menu-type-name'>{data.type}</h1>
          <div className='menu-item-container'>
            {data.items.map((item) => 
              <div>
                <div className='menu-align'>
                  <MenuItem name={item.foodName} cost={item.cost} description={item.description} onClick={(index) => {setActivePopUp(index)}} index={++indexTracker}
                    imageFile={item.images.length > 0 ? "./src/assets/MenuImages/" + item.images[0] : ""}/>
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
      </div>
    </>
  )
}
//
export default Menu