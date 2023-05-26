// import { CardService } from "../../service/CardService";
// import Pagination from 'react-bootstrap/Pagination';
// import { useEffect, useState } from "react";
// import CardComponent from "../card/Card";
// import { v4 as uuidv4 } from 'uuid';
// import NavBar from '../nav-bar/Nav';
// import './ShowCards.css';

// function ShowCards() {
//   const [cards, setCards] = useState([]);
//   let active = 1;
//   let items = [];
//   let qtyItens = 0;

//   useEffect(() => {
//     const fetchCards = async () => {
      
//       CardService.showAll().then((data) => {
//         qtyItens = data.length;
//         console.log(qtyItens);
//         let number = parseInt(qtyItens / 9);
//         console.log(number);
//         do {
//           number --;
//           items.push(
//             <Pagination.Item key={uuidv4} active={number === active}>
//               {number}
//             </Pagination.Item>,
//           );
//         } while(number != 0);
//       }); 

//       try {
//         const response = await CardService.showAll(); 
//         console.log(response.data)
//         setCards(response.data);
//       } catch (error) {
//         console.error(error);
//       }
      
//     };

//     fetchCards();
//   }, []);

//   return (
//     <>
//       <NavBar />
//       <div className="show-all-cards-container">
//         {cards.map((card) => (
//           <CardComponent key={uuidv4()} card={card} />
//         ))}
//       </div>
//       <div>
//         <Pagination>{items}</Pagination>
//         <br />

//         <Pagination size="lg">{items}</Pagination>
//         <br />

//         <Pagination size="sm">{items}</Pagination>
//       </div>
//     </>
//   );
// }

// export default ShowCards;


import { CardService } from "../../service/CardService";
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from "react";
import CardComponent from "../card/Card";
import { v4 as uuidv4 } from 'uuid';
import NavBar from '../nav-bar/Nav';
import './ShowCards.css';

function ShowCards() {
  const [cards, setCards] = useState([]);
  let active = 1;
  let items = [];
  let qtyItems = 0;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const qtyCards = await CardService.qtyCards();
        const response = await CardService.page(active, 9);
        const data = response.data;

        let number = parseInt(qtyCards / 9);
        console.log(number);
        do {
          number--;
          items.push(
            <Pagination.Item key={uuidv4()} active={number === active}>
              {number}
            </Pagination.Item>,
          );
        } while (number !== 0);
        
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, []);

  return (
    <>
      <NavBar />
      <div className="show-all-cards-container">
        {cards.map((card) => (
          <CardComponent key={uuidv4()} card={card} />
        ))}
      </div>
      <div>
        <Pagination>{items}</Pagination>
        <br />

        <Pagination size="lg">{items}</Pagination>
        <br />

        <Pagination size="sm">{items}</Pagination>
      </div>
    </>
  );
}

export default ShowCards;
