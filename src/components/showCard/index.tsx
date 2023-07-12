import { useContext } from "react"
import { CardContext } from "../../providers/CardContext"
import { ICard } from "../../interfaces/card.interfaces"
import { StyledShowCard } from "./style"

export const ShowCard = () => {
    const {secondColumn} = useContext(CardContext)
    const finalCard:ICard = secondColumn[3]
    return(
        
            <StyledShowCard>
                <h1 className="title">This is your card ?</h1>
                <img className="cardImg" src={finalCard.image} alt="finalCard" />
            </StyledShowCard>
        
    )
}