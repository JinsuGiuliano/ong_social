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
    padding-top:100px;
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
    width: 20%;
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

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`

export const Dot = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 0.30rem;
  height: 0.30rem;
  margin: 0 0.50rem;
  /*Animation*/
  animation: ${BounceAnimation} 1s linear infinite;
  animation-delay: ${(props) => props.delay};
`