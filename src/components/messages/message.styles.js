import styled ,{ css }from 'styled-components'


export const ChatListContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    @media only screen and (max-width: 700px){
        width:100%;
    }
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

export const Text = styled.div`
    font-family: Bradley Hand, cursive;
    font-size: 14px;
    line-height:13px;
    color: white;

`

const isCurrent = css`    
  background-image: -webkit-linear-gradient(33deg,#EB984E, #DC7633);

`;

const isNotCurrent = css`
  background-image: -webkit-linear-gradient(33deg,#F4D03F, #F5B041);
`;

const isMainCurrent = css`    
    align-items: flex-start;
    justify-content: flex-start;

`;

const isNotMainCurrent = css`
    align-items: flex-end;
    justify-content: flex-end;
`;

const getStylesMessageContainer = props => {
    if (props.current) {
      return isCurrent;
    }
    return isNotCurrent;
  };

  const getStylesMainMessageContainer = props => {
    if (props.current) {
      return isMainCurrent;
    }
    return isNotMainCurrent;
  };


  export const MessageMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    ${getStylesMainMessageContainer}
`

  export const MessageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    padding:8px;
    align-items: center;
    border-radius:12px;
    box-shadow: 1px 1px 1px #4A235A;
    color:#fff;
    margin:5px;
    ${getStylesMessageContainer}
`

