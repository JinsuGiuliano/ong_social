import styled from 'styled-components'
import { ReactComponent as CloseSVG  } from '../../../assets/icons/close.svg'
import { ReactComponent as EditSVG  } from '../../../assets/icons/edit.svg'

export const EditProfileContainer = styled.div`
    z-index:9999999;
    width: 40%;
    height: 78%;
    position: fixed;
    margin: 50px 0px;
    display:flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 5px 5px 30px gray ;
    @media only screen and (max-width: 700px){
        width:100%;
    }
`


export const EditProfileTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #eae9e9;
`

export const CloseIcon = styled(CloseSVG)`
    width: 20px;
    height: 100%;
    cursor: pointer;
        & path {
            fill: black;
        }
        &:hover{
            & path {
               fill: ${({color}) => color };
            }
            width: 21px;
        }
`

export const EditIcon = styled(EditSVG)`
    width: 20px;
    height: 100%;
    cursor: pointer;
        & path {
            fill: gray;
        }
        &:hover{
            & path {
               fill: ${({color}) => color };
            }
            width: 21px;
        }
    
`

export const EditProfileForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10 20px;
    @media only screen and (max-width: 700px){
        padding: 5 10px;
    }
`

export const EditFormInput = styled.div`
    width:90%;
    max-height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    margin: 10px 0px;
    cursor: pointer;
    &:hover{
        border-radius:25px;
        background-color: #f8f8f8;
    }
`
export const InputLabel = styled.div`
    width: 20%
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