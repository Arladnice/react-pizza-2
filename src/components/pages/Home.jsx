import PizzaBlock from "../PizzaBlock";
import Categories from "../Categories";
import Sort from "../Sort";
import Skeleton from "../PizzaBlock/Skeleton";

import React, { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://628822f210e93797c156ffe0.mockapi.io/items")
      .then((item) => item.json())
      .then((item) => {
        setItems(item);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
