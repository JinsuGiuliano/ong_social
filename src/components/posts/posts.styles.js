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
    padding-top:100px;
`


export const TopMenuBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    background-color: #fff;
    height:50px;
`