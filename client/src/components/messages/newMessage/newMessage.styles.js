import styled from 'styled-components'
import { ReactComponent as CloseSVG  } from '../../../assets/icons/close.svg'
import { ReactComponent as SendSVG  } from '../../../assets/icons/send.svg'

export const SendNewMessageContainer = styled.div`
    z-index:999999999999999999999999999999;
    width: 45%;
    position: fixed;
    margin: 50px 0px;
    display:flex;
    flex-direction: column;
    background-image: -webkit-linear-gradient(67deg,#ff503c, #ffb13c);
    border-radius: 20px;
    box-shadow: 5px 5px 30px black ;
    @media only screen and (max-width: 700px){
        width:100%;
    }
`


export const SendNewMessageTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`

export const CloseIcon = styled(CloseSVG)`
    width: 20px;
    height: 100%;
    cursor: pointer;
        & path {
            fill: white;
        }
        &:hover{
            & path {
               fill: ${({color}) => color };
            }
        }
`

export const SendIcon = styled(SendSVG)`
    width: 30px;
    height: 100%;
    cursor: pointer;
        & path {
            fill: white;
        }
        &:hover{
            & path {
               fill: ${({color}) => color };
            }
        }
`


export const SendNewMessageForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10 20px;
    @media only screen and (max-width: 700px){
        padding: 5 10px;
    }
`

export const MessageInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    margin: 10px 0px;
    cursor: pointer;
`
export const InputLabel = styled.div`
    width: 20%;
`;

export const InputInput = styled.div`
    width: 75%;
    padding: 0 10px;
`;

export const InputInputImage = styled.div`
    width: 75%;
    padding: 0 10px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    

`;