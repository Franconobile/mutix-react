import styled from "styled-components"

export const PostContainer = styled.div`
width: 50%;
margin: auto;
min-height: 150px;
position: relative;
top: 55px;
background: #212529;
border-radius: 10px;
margin-top: 20px;
border: solid 1px #43464A;

`

export const SubPostContainer = styled.div`
border-radius: 10px;


.cardBody {
    text-align: start;
    width: 90%;
    margin-top: 20px;
    color: #E0E0E0;
    margin-left: 20px;
    line-height: 1.3em;
    margin-bottom: 25px;
}

.cardHeader {
    display: flex;
    align-items: center;
    background: #282C30;
    width: 100%;
    height: 80px;
    border-bottom: solid 1px #43464A;
    border-radius: 10px 10px 0 0;
}


.userAndDate {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

.userInfo a {
    color: #BDBFC3;
    text-decoration: none;
}

.dateInfo {
    margin-top: 6px;
}

.dateInfo a {
    color: #67696D;
    text-decoration: none;
}

.PostPfp {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-left: 10px;
}

.postImage {
    width: 80%;
    object-fit: cover;
    border-radius: 5px;
    margin-top: 15px;
}

.cardFooter {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: solid 1px #43464A;
    background: #282C30;
    height: 50px;
    color: #B5B4C3;
    gap: 20px;
    padding-inline: 15px;
    border-radius: 0px 0px 10px 10px;
}

.reactionsPost:last-of-type {
    margin-left: auto;
}
`