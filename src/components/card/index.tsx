import { ICard } from "../../interfaces/card.interfaces"
import { StyledCard } from "./styled"

interface CardProps{
    card: ICard;
    index: string
}


export const Card = ({card,index}:CardProps) => {
    return (
        <StyledCard animation={index} className="cardContainer">
            <img src={card?.image} alt="carta" className="card_img"/>
        </StyledCard>
    )
}