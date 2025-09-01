import React from 'react'

interface Props {
  name: string;
  onClick: (i: number) => void;
  index: number
}

const ProjectItem = ({ name, onClick, index}: Props) => {
  return (
    <div  onClick={() => onClick(index)}>
      <h2>{name}</h2>
        
    </div> 
  )
}

export default ProjectItem