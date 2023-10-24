//react
import { useEffect, useState } from "react";

//service
import { CardService } from '../../service/CardService';

//external
import { v4 } from 'uuid';

function SelectCard() {

    const [list, setCards] = useState([])

    useEffect(() => {
        CardService.showAll().then(response => {
            setCards(response)
        }).catch(erro =>
            console.log(erro)
        )
    }, [])

    return (
        <>
            {list?.map((item) => (
                <option value={item.id} key={v4()}>{item.name}</option>
            ))}
        </>
    )
}

export default SelectCard;