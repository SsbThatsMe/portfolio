
interface Props {
  name: string;
  onClose: () => void;
  description: string
  images: string[]
}

const MenuPopup = ({name,description, images, onClose}: Props) => {
  console.log(images[0])
  return (
    <div className='project-pop-up'>
      <span className={"material-symbols-outlined popup-close-button"} onClick={() => onClose()}>close</span>
        <h1>{name}</h1>
        <p>{description}</p>
        {images.length > 0 && <img className='menu-popup-img' src={'./src/assets/MenuImages/' + images[0]}/>}
        
    </div>
  )
}

export default MenuPopup