
interface Props {
  name: string;
  onClick: (i: number) => void;
  index: number;
  cost: string;
  imageFile: string;
  description: string;
}

const MenuItem = ({ name, onClick, index, cost, imageFile, description}: Props) => {
  return (
    <>
    <div className='menu-item' onClick={() => onClick(index)}>
      <div className="menu-item-top">
        <h2>{name}</h2>
        <h3>{cost}</h3>
      </div>
      {description}
    </div>
    </>
  )
}

export default MenuItem