import styled from "styled-components";

export const StyledShowCard = styled.div`
    height: 100vh;
    background-color:#182616;
    display: flex;
    align-items: center;
    flex-direction: column;
    .title{
        margin-top: 4rem;
        color:#D9D6B0;
    
    }
    .cardImg{
        margin-top: 2rem;
        padding: 1rem;
        border: 1px solid #8C7B26;
        border-radius: 1rem;
    }
    .cardImg:hover{
        border: 1px solid  #D9D9D9;
    }
`