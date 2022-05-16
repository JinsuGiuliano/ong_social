import styled from 'styled-components'


export const PostContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    @media only screen and (max-width: 700px){
        width:100%;
    }
`
export const PostsListContainer = styled.div`
    height: 800px;
    padding-top:100px;
    overflow-y:auto;
`

export const SeeNewest = styled.div`
    width: 20%;
    background-image: -webkit-linear-gradient(67deg,#4285f4, #4842f4 );
    position:fixed;
    color: #fff;
    bottom:0;
    z-index:999999999999999999;
    border-radius:20px;
    box-shadow: 0px 0px 10px #4285f4; 
    margin:10px;
    padding:10px;
    text-align: center;
    cursor:pointer;
`
export const SeeNewestContainer = styled.div`
    display:flex;
    flex-direction:column-reverse;
    align-items: center;
    

`

export const TopMenuBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    float:center;
    top:0;
    background-color: #fff;
    height:50px;
`