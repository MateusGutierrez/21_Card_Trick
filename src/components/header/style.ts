import styled from "styled-components";

export const StyledHeader = styled.div`
    height: 100px;
    width: 100%;

    border-bottom: 1px solid #D9D9D9;
    background-color:#254021;
    color: #D9D9D9;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title{
        margin-left: 2rem;
    }
    .start_button{
        margin-right: 2rem;
        height: 30px;
        width: 80px;
        font-size: larger;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: #D9D9D9;
        color: #074035;
    }
    .start_button:hover{
        background-color:  #D9D6B0;
    }
/* 
    @media(min-width: 500px){
        height: 200px;
    } */
`