import React from "react";
import '../styles/styles.css';

const ArticleCard = ({ data, cards }: { data: any, cards: any[]}) => {
  return (
    <div className="container">
      <div className="title__container">
        <h1>{data.title}</h1>
        <span>{data.introduction}</span>
      </div>
      <div className="cards__container">
        {cards.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt='card' className="card__img"/>
            <h3 className="card__title">{item.title}</h3>
            <p className="card__text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;