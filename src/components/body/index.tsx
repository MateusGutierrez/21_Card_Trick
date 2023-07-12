import { useContext, useEffect } from "react"
import { StyledBody } from "./styled"
import { CardContext } from "../../providers/CardContext"
import { Card } from "../card"
import { useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"

export const Body = () => {
    const {count,chooseColumn,firstColumn,secondColumn,thirdColumn} = useContext(CardContext)
    const navigate = useNavigate()
    useEffect(() => {
        if(count === 3){
            navigate("/show")
        }
    },[count])
    return(
        <StyledBody>
            {
                Number(localStorage.getItem("@PLAY")) > 0 ?(
                <section className="container">
                    <div className="j1" id="1" onClick={chooseColumn}> 

                    {firstColumn.map((card,index)=> (
                        <Card card={card} index={`${index}.8s`} key={card.code+index}/>
                    ))} 
                    </div>
                    <div className="j2" id="2" onClick={chooseColumn}>
                        {secondColumn.map((card,index)=> (
                        <Card card={card} index={`${index}.8s`} key={card.code+index}/>
                    ))}
                    </div>
                    <div className="j3" id="3" onClick={chooseColumn}>
                        {thirdColumn.map((card,index)=> (
                        <Card card={card} index={`${index}.8s`} key={card.code+index}/>
                    ))}
                    </div>
                </section>

                ): (
                    <div className="containerBeforePlay">
                        <h1 className="titleTrick">Welcome to 21 Card Trick Game!</h1>
                        <p className="textTrick"> To start the trick you need to choose one card on your mind but dont tell to anyone!
                            Then you have to show in whitch column your card are.
                            Repeat this process more 3 times and the magitian will show you the card that you have chosen.</p>
                        <img src="https://deckofcardsapi.com/static/img/back.png" alt="card" className="backCard"/>
                    </div>
                )
            }
            <ToastContainer theme="dark" />
        </StyledBody>
    )
}