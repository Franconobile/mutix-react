import styled from "styled-components";

export const CardRightContainer = styled.div`
background: #212529;
width: 550px;
height: 430px;
position: relative;
right: 2%;
top: 55px;
border-radius: 10px;

.cardRightHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #282C30;
    color: lightgray;
    height: 50px;
    border-bottom: solid 1px #43464A;
    border-radius: 10px 10px 0 0;
}

.cardRightBody {
    margin-top: 10px;
}

.cardRightPfp {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-left: 10px;
}


.profileInfo {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: 10px;
    color: #707070;
}

.profileInfo a {
    color: #BBC9C4;
    text-decoration: none;
}

.profile1{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}

.profile2{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}

.profile3{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}

.btnRightCard button {
    height: 40px;
    width: 80px;
    border: none;
    cursor: pointer;
    border-radius: 30px;
    background: #CBBBD4;
}

.btnRightCard:last-of-type {
    margin-left: auto;
    padding-inline: 15px;
}

.viewMore {
    margin-top: 20px;
    padding: 10px;
}

.viewMore a {
    color: #BAA0C9;
    text-decoration: none;
}


.cardRightFooter {
    border-top: solid 1px #43464A;
    background: #282C30;
    height: 120px;
    border-radius: 0px 0px 10px 10px;
    color: #B5B4C3;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cardRightFooterLinks {
    display: flex;
    gap: 20px;

}

.cardRightFooterLinks a{
    color: #AFABAB;
}

.buttonkofi {
    margin-top: 15px;
    background: #FF5F5F;
    padding: 10px;
    border: none;
}

.buttonkofi a{
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
}

`