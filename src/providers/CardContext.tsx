import { createContext, useState } from "react";
import { api } from "../service/api";
import { ICard } from "../interfaces/card.interfaces";
import { useNavigate} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify";

interface iCardContext{
    getDeckId: () => void;
    count: number;
    firstColumn: ICard[] | [];
    secondColumn: ICard[] | [];
    thirdColumn: ICard[] | [];
    chooseColumn: React.MouseEventHandler<HTMLDivElement>;
    reStart: () => void;
}
interface iCardProps{
    children: React.ReactNode
}


export const CardContext = createContext({} as iCardContext)

export const CardProvider = ({children}: iCardProps) => {
    const [count, setCount] = useState(0)
    const [firstColumn, setFirstColumn] = useState<ICard[] | []>([])
    const [secondColumn, setSecondColumn] = useState<ICard[] | []>([])
    const [thirdColumn, setThirdColumn] = useState<ICard[] | []>([])
    const navigate = useNavigate()


    const getDeckId = async () => {
        const response = await api.get("api/deck/new/shuffle/?deck_count=1")
        localStorage.setItem("@DECK_ID", response.data.deck_id)
        localStorage.setItem("@PLAY", "1")
        toast.success("Choose the column that contains your card!", {autoClose: 2000, position:"top-left"})
        setTimeout(() => {
            getDeck()
        }, 3000)
    }
    const reStart = () => {
        setCount(0)
        localStorage.clear()
        toast.success("Restarting the trick!", {autoClose:1500, position:"top-left"})
        navigate("/")
    }
    const getDeck = async () => {
        const deck_id: string | null = localStorage.getItem("@DECK_ID")
        const response = await api.get(`api/deck/${deck_id}/draw/?count=21`)
        setFirstColumn([...response.data.cards.slice(0, 7)])
        setSecondColumn([...response.data.cards.slice(7, 14)])
        setThirdColumn([...response.data.cards.slice(14, 21)])
    }
    const chooseColumn: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const target = e.currentTarget
        const id: string = target.id
        localStorage.setItem("@ColumnId", id)
        if(count < 4){
            setCount(count + 1)
        }
        toast.warning("Which column is your card in ?",  {autoClose: 3000, position:"top-left"})
        shuffleCards()

    }
    const shuffleCards = () => {
        const deck = []
        const id: number | null= Number(localStorage.getItem("@ColumnId"))
        if(id === 1){
            deck.push(...thirdColumn, ...firstColumn, ...secondColumn)
        }else if(id === 2){
            deck.push(...thirdColumn,...secondColumn, ...firstColumn )
        }else if(id === 3){
            deck.push(...firstColumn,...thirdColumn,...secondColumn)
        }
        distributeCards(deck)
    }
    const distributeCards = (deck: ICard[]) => {
        setFirstColumn([deck[0],deck[3],deck[6],deck[9],deck[12],deck[15],deck[18]])
        setSecondColumn([deck[1],deck[4],deck[7],deck[10],deck[13],deck[16],deck[19]])
        setThirdColumn([deck[2],deck[5],deck[8],deck[11],deck[14],deck[17],deck[20]])
    }
    
    return(
        <CardContext.Provider value={{
            chooseColumn,
            getDeckId,
            firstColumn,
            secondColumn,
            thirdColumn,
            reStart,
            count
        }}>

            {children}
        </CardContext.Provider>
    )
}










