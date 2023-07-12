import styled from "styled-components";

export const StyledBody = styled.div`
    height: 100vh;
    background-color: #182616;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        border: 1px solid transparent;
    }
    .container{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5%;
    }
    .j1,.j2,.j3{
        height: 23%;
        width: 80%;
        display: flex;
        gap: 5%;
        cursor: pointer;
        padding: 10px;
    }
    .j1:hover{
        border: 1px solid #D9D6B0;
    }
    .j2:hover{
        border: 1px solid #D9D6B0;
    }
    .j3:hover{
        border: 1px solid #D9D6B0;
    }
    .containerBeforePlay{
        border: 1px solid #8C7B26;
        height: 80%;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color:#0C0D0C;
    }
    .titleTrick{
        color: #D9D9D9;
    }
    .textTrick{
        color:#D9D9D9;
        width: 70%;
        line-height: 1.5rem;
    }
    .backCard{
        height: 200px;
    }
`