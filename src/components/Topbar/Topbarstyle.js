import styled from "styled-components";

export const TopbarWrapper = styled.div`
z-index: 2;
background: #2C3136;
width: 100%;
height: 35px;
position: fixed;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 5.5em;

span {
    color: #AFAFAF;
    background: none;
    font-size: 20px;
}
`