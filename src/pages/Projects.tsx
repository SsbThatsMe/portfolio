import { useState } from 'react'
import NavBar from '../components/NavBar'
import ProjectItem from '../components/ProjectItem'
import data from "../ProjectData.json"
import ProjectPopup from '../components/ProjectPopup'

const Projects = () => {
  const [activePopUp, setActivePopUp] = useState(-1)

  return (
    <>
        <NavBar/>
        <h1>Projects</h1>
        {data.map((data, i) => (
          <div>
            <ProjectItem name={data.projectName} onClick={(index) => {setActivePopUp(index)}} index={i}/>
            {activePopUp == i && 
              <ProjectPopup name={data.projectName} onClose={() => {setActivePopUp(-1)}} videoURL={data.videoURL != undefined ? data.videoURL : ""} description={data.description} websiteURL={data.websiteURL != undefined ? data.websiteURL : ""} images={data.images}></ProjectPopup>
            }
          </div>
        ))}
    </>
  )
}

export default Projects