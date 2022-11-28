import './ItemPicture.css'

function ItemPicture(props) {
    return <div className="item-picture"> <img className="img" src={props.itemPicture} alt="" /> </div>;
};

export default ItemPicture;