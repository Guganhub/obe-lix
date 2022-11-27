import React, { useState } from "react";
import Food from "../../Data/Food.json";

export default function Card() {
  var items = Food.data[0].NonVeg;
  var FoodData = JSON.parse(localStorage.getItem("Fooddata"));
  var len = items.length;
  const arr = new Array(len).fill(0);
  var [quantity, setQuantity] = useState(arr);
  const da = JSON.parse(localStorage.getItem("quantity"));
  if (!da) {
    var data = new Array(len).fill(0);
    localStorage.setItem("quantity", JSON.stringify(data));
  }
  if (FoodData) {
    items = items.concat(FoodData);
  }
  const increament = (index) => {
    if (items[index].quantity >= da[index] + 1) da[index] = da[index] + 1;
    data = da;
    localStorage.setItem("quantity", JSON.stringify(data));
    setQuantity(da);
  };
  const decreament = (index) => {
    if (da[index] - 1 >= 0) da[index] = da[index] - 1;
    data = da;
    localStorage.setItem("quantity", JSON.stringify(data));
    console.log(quantity);
    setQuantity(da);
  };
  const addcart = (index) => {
    var cartData = JSON.parse(localStorage.getItem("cartdata"));
    const value = {
      title: items[index].title,
      content: items[index].content,
      url: items[index].url,
      price: items[index].price,
      quantity: quantity[index],
    };
    if (cartData) {
      cartData = cartData.concat(value);
    } else {
      cartData = [value];
    }
    localStorage.setItem("cartdata", JSON.stringify(cartData));
  };

  return (
    <>
      <div className=" ">
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-5">
          {items.map((item, index) => (
            <div className="col">
              <div className="card h-100">
                <img src={item.url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.content}</p>
                  <p className="card-text">Rs:{item.price}</p>
                  <p className="card-text">
                    <span onClick={() => increament(index)}>+ </span>Quantity:
                    {quantity[index]}
                    <span onClick={() => decreament(index)}> -</span>
                  </p>
                  <button onClick={() => addcart(index)}>Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
