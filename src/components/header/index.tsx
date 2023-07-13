import { useContext } from "react"
import { StyledHeader } from "./style"
import { CardContext } from "../../providers/CardContext"
import { ToastContainer } from "react-toastify"

export const Header = () => {
    const {getDeckId,reStart} = useContext(CardContext)
    return(
        <>
            <StyledHeader className="headerContainer">
                    <h1 className="title">21 Card Trick</h1>
                    
                    <div className="div_buttons">
                        <button onClick={getDeckId} className="start_button">Play</button>
                        <button className="start_button" onClick={reStart}>Reset</button>
                    </div>
            </StyledHeader>
            <ToastContainer theme="dark"/>
        </>
    )
}