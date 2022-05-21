import React, {useCallback, useEffect} from 'react';
import update from 'immutability-helper'
import './Drag.css';
import Card from './Card';

function DragContainer({sendData}){
    const [cards, setCards] = React.useState([
          {
            id: 1,
            text: 'WeekDays Classes (Morning)',
          },
          {
            id: 2,
            text: 'WeekDays Classes (Evening)',
          },
          {
            id: 3,
            text: 'Weekend Classes (Night)',
          },
    ])
    
    useEffect(()=>{
        sendData(cards)
    },[cards])
    const moveCard = useCallback((dragIndex, hoverIndex) => {
        setCards((prevCards) =>
          update(prevCards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, prevCards[dragIndex]],
            ],
          }),
        )
    }, [])

    const renderCards = useCallback((card, index) => {
        return(
            <Card
                Key = {card.id}
                index = {index}
                id = {card.id}
                text = {card.text}
                moveCard = {moveCard}
            />
        )
    },[])

    // console.log(cards);
    return(
        <div className='DragContainer'>
            <p>Choose the priorities for tutions</p>
            {
                cards.map((card,i)=>{
                    return renderCards(card,i)
                })
            }
        </div>
    )
}

export default DragContainer;