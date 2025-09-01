import React from 'react'

interface Props {
  name: string;
  onClose: (i: number) => void;
  videoURL: string
  description: string
  websiteURL: string
  images: string[]
}

const ProjectPopup = ({name, onClose, videoURL, description, websiteURL, images}: Props) => {
  return (
    <div className='project-pop-up'>
        <h1>{name}</h1>
        {videoURL != "" && <iframe className='project-video-player' width="560" height="315" src={videoURL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>}
        {}
        <p>{description}</p>
        { websiteURL != "" && <a href={websiteURL}>Website</a>}
    </div>
  )
}

export default ProjectPopup