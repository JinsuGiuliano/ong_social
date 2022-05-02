import styled from 'styled-components'
import { ReactComponent as CalendarSVG  } from '../../assets/icons/calendar.svg'

export const PostContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    @media only screen and (max-width: 700px){
        width:100%;
    }
`
export const TopProfile = styled.div`
    display: flex;
    align-items: center;
    background-color: gray;
    height:200px;
    width:100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const ProfileName = styled.span`
    margin:5px 0;
    font-size: 18px;
    font-weight: 600;
    color:white;
    text-shadow: 1px 1px 8px  #000;
`
export const ProfileEmail = styled.span`
    margin:5px 0;   
    font-size: 12px;
    font-weight: normal;
    color:white;
    text-shadow: 1px 1px 8px  #000;
`
export const ProfileInfoContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: flex-end;
`

export const JoinContainer = styled.div`
    margin:5px 0;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: flex-start;
`
export const CalendarIcon = styled(CalendarSVG)`
    width: 15px;
    height: 100%;
    margin: 0 5px 0px 0px; 
    text-shadow: 1px 1px 8px  #000;
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

export const ProfilePhoto = styled.div`
    width: 150px;
    height: 150px;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    border-radius:25px;
    border: 5px solid #fff;
    margin:10px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    
`
