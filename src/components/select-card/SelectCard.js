import { v4 } from 'uuid';
import { useEffect, useState } from "react";
import { CardService } from '../../service/CardService';

// import "./SelectCartas.css";

function SelectCard() {

    const [list, setCards] = useState([])

    useEffect(() => {
        CardService.showAll().then(response => {
            console.log(response)
            setCards(response.data)
        }).catch(erro =>
            console.log(erro)
        )
    }, [])

    return (
        <>
            {list.map((item) => (
                <option value={item.id} key={v4()}>{item.name}</option>
            ))}
        </>
    )
}

export default SelectCard;