import styled from "styled-components";


export const UserSharedPicsContainer = styled.div`
background: #212529;
width: 350px;
position: relative;
top: 55px;
border-radius: 10px;
left: 6%;

margin-top: 30px;

.userSharedPicsHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #282C30;
    color: lightgray;
    height: 50px;
    border-bottom: solid 1px #43464A;
    border-radius: 10px 10px 0 0;
}

.userSharedPic {
    width: 40%;
    border-radius: 15px;
}

.userSharedPicsBody {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    gap: 10px;
}

.viewMorePics button {
    width: 100px;
    height: 30px;
    font-size: 15px;
    border: none;
    background: #B5B4C3;
    color: black;
    border-radius: 20px;
    cursor: pointer;
}
`