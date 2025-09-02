import React from 'react'

interface Props {
  name: string;
  onClick: (i: number) => void;
  index: number;
  imageFile: string
}

const ProjectItem = ({ name, onClick, index, imageFile}: Props) => {
  return (
    <div className='project-item' onClick={() => onClick(index)}>
      
      {imageFile != "" && <img className='project-item-image' src={imageFile} alt="" />}
      <h5>{name}</h5>
    </div> 
  )
}

export default ProjectItem