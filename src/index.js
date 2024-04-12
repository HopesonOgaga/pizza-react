import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast react pizza co..</h1>
    </header>
  );
}

function Main() {
  return (
    <main className="menu">
      <h2>our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        img="./img/spinaci.jpg"
        price={0}
      />
      <Pizza
        name="Pizza fungi"
        ingredients="Bread with italian olive oil and rosemary"
        img="./img/focaccia.jpg"
        price={2}
      />
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.img} alt="pizza" />
      <div>
        <h3> {props.name} </h3>
        <p>{props.ingredients}</p>
        <p>{props.price + 2}</p>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open_hour = 12;
  const close_hour = 22;
  const is_open = hour >= open_hour && hour <= close_hour;
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} we're currently open{" "}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
