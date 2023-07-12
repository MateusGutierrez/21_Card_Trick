import styled from "styled-components";

import { keyframes } from 'styled-components'
const sortCards = keyframes`
 0% { opacity: 0  }
 100% {  opacity: 1; }
`

export const StyledCard = styled.div<{animation: string}>`
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;    
    
    .card_img{
        width: 100%;
        height: fit-content;
        align-self: center;
        animation: ${sortCards} ${props => props.animation};         
    }
`