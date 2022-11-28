import ItemPicture from './ItemPicture';
import './ExpenseItem.css'

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <div className="expense-item__description">
                <div>{props.title}</div>
                <div>{props.amount}₪</div>
            </div>
            <ItemPicture itemPicture={props.itemPicture} />
        </div>
    );
}

export default ExpenseItem;