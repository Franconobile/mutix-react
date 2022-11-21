import styled from "styled-components";

export const ContentUploadContainer = styled.div`
width: 60%;
background: #212529;
min-height: 150px;
border-radius: 10px;
border: solid 1px #43464A;
margin: auto;

position: relative;
top: 55px;


.profileImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
}

.contentWriting {
    width: 35pc;
    min-height: 40px;
    margin-left: 10px;
    margin-top: 5px;
    padding: 0 0 30px 0;
    border: solid 1px #43464A;
    background: #1F2022;
    color: white;
    font-size: 14px;
    padding-inline: 1% 1%;
}

.contentWriting:focus{
    background-color: #2E2F32;
    color: white;
    outline: none;
}

[contenteditable][placeholder]:empty:before {
    content: attr(placeholder);
    position: absolute;
    color: gray;
    background-color: transparent;
  }
`

export const ContentUploadContent = styled.div`
display: flex;
align-items: center;
background: none;
position: relative;
top: 15px;
`

export const Attachments = styled.div`
background: none;
display: flex;

.icons {
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-top: 40px;
    background: none;
    color: #CBBBD4;
}

button {
    background: #E67C72;
    color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    position: relative;
    width: 50px;
    top: 40px;
    cursor: pointer;
    transition: 1s ease;
}

.btnLast:last-of-type {
    margin-left: auto;
    padding-inline: 15px;
}

button:hover {
    background: #D85144;
}
`