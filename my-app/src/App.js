import ExpenseItem from "./components/ExpenseItem";

function App() {
  const shoppingList = [
    { title: 'סבון', amount: 15, itemPicture: require("./pics/pic1.jpg") },
    { title: 'שמן זית', amount: 30, itemPicture: require("./pics/pic2.jpg") },
    { title: 'אבטיח', amount: 20, itemPicture: require("./pics/pic3.jpg") },
    { title: 'לחם', amount: 10, itemPicture: require("./pics/pic4.jpg") },
  ];

  return (
    <div>
      <h2> My shopping list </h2>
      <ExpenseItem
        title={shoppingList[0].title}
        amount={shoppingList[0].amount}
        itemPicture={shoppingList[0].itemPicture}
      ></ExpenseItem>
      <ExpenseItem
        title={shoppingList[1].title}
        amount={shoppingList[1].amount}
        itemPicture={shoppingList[1].itemPicture}
      ></ExpenseItem>
      <ExpenseItem
        title={shoppingList[2].title}
        amount={shoppingList[2].amount}
        itemPicture={shoppingList[2].itemPicture}
      ></ExpenseItem>
      <ExpenseItem
        title={shoppingList[3].title}
        amount={shoppingList[3].amount}
        itemPicture={shoppingList[3].itemPicture}
      ></ExpenseItem>
    </div>
  );
}

export default App;