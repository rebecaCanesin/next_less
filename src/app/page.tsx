import json from './data.json'
import ArticleCard from './articleCard';

export default function Home() {
  const cardData = json;
  const { cards, data } = cardData;

  return (
    <div className="App">
      <ArticleCard data={data} cards={cards} />
    </div>
  );
  
}
