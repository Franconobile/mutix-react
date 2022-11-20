import styled from "styled-components";


export const LeftbarWrapper = styled.div`
z-index: 3;
background-color: #1E2125;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100%;
width: 70px;
position: fixed;

a {
    background: none;
}



#pfp {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid 2px #BEB1D1;
}



`;

export const TopElements = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
align-items: center;
background:none;

`

export const UserElements = styled.div `
display: flex;
flex-direction: column;
gap: 15px;
align-items: center;
background: none;
padding-bottom: 15px;
`