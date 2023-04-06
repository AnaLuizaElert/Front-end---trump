import CardComponent from "../card/Card"
import { v4 } from 'uuid'
import './show-cards.css';

function ShowCards() {

  const list = [
    {name: 'Abacaxi', qtyProteins: '123', qtyCalories: '123', glycemiclevel: '123', ranking: '10', srcRanking: 'https://sportlife.com.br/wp-content/uploads/2021/11/abacaxi-1.jpg'},
    {name: 'Melancia', qtyProteins: '123', qtyCalories: '123', glycemiclevel: '123', ranking: '10', srcRanking: 'https://agroinsight.com.br/wp-content/uploads/2021/05/panorama-da-fruticultura-brasileira-melancia.jpg'},
    {name: 'Melão', qtyProteins: '123', qtyCalories: '123', glycemiclevel: '123', ranking: '10', srcRanking: 'https://saberhortifruti.com.br/wp-content/uploads/2019/08/Beneficios-do-melao.jpg'},
    {name: 'Abacaxi', qtyProteins: '123', qtyCalories: '123', glycemiclevel: '123', ranking: '10', srcRanking: 'https://sportlife.com.br/wp-content/uploads/2021/11/abacaxi-1.jpg'},
    {name: 'Melancia', qtyProteins: '123', qtyCalories: '123', glycemiclevel: '123', ranking: '10', srcRanking: 'https://agroinsight.com.br/wp-content/uploads/2021/05/panorama-da-fruticultura-brasileira-melancia.jpg'},
    {name: 'Melão', qtyProteins: '123', qtyCalories: '123', glycemiclevel: '123', ranking: '10', srcRanking: 'https://saberhortifruti.com.br/wp-content/uploads/2019/08/Beneficios-do-melao.jpg'},
    {name: 'Caqui', qtyProteins: '123', qtyCalories: '123', glycemiclevel: '123', ranking: '10', srcRanking: 'https://cdn.awsli.com.br/1000x1000/18/18885/produto/146591139/81bacbb61a.jpg'}
  ];

  return (
    <div className="show-all-cards-container">
    <> 
    {list.map((card) => 
         <CardComponent name={card.name} qtyCalories={card.qtyCalories} qtyProteins={card.qtyProteins} glycemiclevel={card.glycemiclevel} ranking={card.ranking} srcRanking={card.srcRanking} key={v4()}/>
    )}
    </>
    </div>
  );
};

function returnCard(){


}

export default ShowCards;