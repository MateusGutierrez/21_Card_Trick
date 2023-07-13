import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/mainPage/mainPage"
import { ShowCardPage } from "../pages/showPage/showCardPage"

export const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/show" element={<ShowCardPage/>}/>
        </Routes>
    )
}