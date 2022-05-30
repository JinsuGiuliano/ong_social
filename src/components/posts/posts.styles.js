import styled,{keyframes, css} from 'styled-components'


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
    padding:100px 0px;
    overflow-y:auto;
`

export const backgroundAnimation = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`
const loadingBg = css`
background-size: 200% 200%;
background-image: -webkit-linear-gradient(67deg,#4285f4, #4842f4,#4285f4, #4842f4 );
animation: ${backgroundAnimation} 2s ease infinite;
`

const loadingNewest = props =>{
    if(props.isLoading){
        return loadingBg;
    }
}

export const SeeNewest = styled.div`
    width: auto;
    height:20px;
    background-image: -webkit-linear-gradient(67deg,#4285f4, #4842f4 );
    position:fixed;
    color: #fff;
    font-weight:500;
    font-size:15px;
    bottom:0;
    z-index:999999999999999999;
    border-radius:20px;
    margin:10px;
    padding:10px;
    text-align: center;
    cursor:pointer;

    ${loadingNewest}

    &:hover{
        box-shadow: 0px 0px 10px #4285f4; 
    }
`
export const SeeNewestContainer = styled.div`
    display:flex;
    flex-direction:column-reverse;
    align-items: center;
    @media only screen and (max-width: 700px){
        width:100%;
    }

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
