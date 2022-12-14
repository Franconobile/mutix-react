import styled from "styled-components";
import userbannercustom1 from "../UI/userbannercustom0.jpg"

export const UserProfileHeader = styled.div`

 .userProfileBannerImg {
    width: 100%;
    height: 370px;
    background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(18,20,22,1) 100%), url(${userbannercustom1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 

    display: flex;
    justify-content: center;
    align-items: flex-end;
} 

#userBannerPfp {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: solid 2px #282828;
    position: relative;
    left: 50px;
    top: 30px;
}

.userProfileInfo {
    color: white;
    text-align: center;
}

.userProfileStats {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 550px;
    margin-top: 25px;
}

.userCounter {
    display: flex;
    flex-direction: column;
}

.userProfileStats p {
    color: #D5D5D5;
    font-size: 25px;
}

.userProfileStats span {
    color: #A8A8A8;
}

`

