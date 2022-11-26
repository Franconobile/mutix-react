import styled from "styled-components";

export const UserFollowersContent = styled.div`
background: #212529;
width: 350px;
position: relative;
top: 55px;
border-radius: 10px;
left: 6%;

margin-top: 30px;

.userFollowersCardHeader {
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

.userFollowerPfp {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 10px;
}

.userFollowersBody{
    margin: 10px;
}

.viewMoreFollowers {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.viewMoreFollowers a {
    color: #938EA9;
    font-size: 15px;
}
`