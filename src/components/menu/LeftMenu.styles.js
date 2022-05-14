import styled  from 'styled-components'
import { ReactComponent as UserSVG  } from '../../assets/icons/user.svg'
import { ReactComponent as HeartSVG  } from '../../assets/icons/heart.svg'
import { ReactComponent as HomeSVG  } from '../../assets/icons/home.svg'
import { ReactComponent as BellSVG  } from '../../assets/icons/bell.svg'
import { ReactComponent as EnvelopeSVG  } from '../../assets/icons/envelope.svg'
import { ReactComponent as YspSVG  } from '../../assets/icons/ysp-logo.svg'


export const MainMenuContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 700px){
        display:none;
    }
`
export const FixedContainer = styled.div`
    position: fixed;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 90%;
`
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    height:80%;
`

export const MenuLogoContainer = styled.div`
    width: 23%;
    height: 50px;
    top:0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 5px;

    @media only screen and (max-width: 700px){
        width: 15%;
        justify-content: center;
    }
`;


export const MenuLogo = styled(YspSVG)`
    width: 50px;
    height: 50px;
    cursor:pointer;
    & path {
            fill: #4285f4;
        }
    &:hover{
        & path {
            fill: ${({color}) => color };
        }
    }
`;


export const MenuTitle = styled.span`
    font-size:100px,;
    font-weight:lighter; 
    color:#4285f4;
`

export const OptionContainer = styled.div`
    height:40px;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 20px;  
    cursor: pointer;

    &:hover{
        background-color: #f7f7f7;
    }

`

export const ProfileOptionContainer = styled.div`
    height:40px;
    position: fixed;
    bottom:0;
    display: flex;
    align-items: center;
    padding: 10px;  
    cursor: pointer;

    &:hover{
        background-color: #f7f7f7;
    }

`
export const PostOptionContainer = styled.div`
    height:40px;
    width:100%;
    display: flex;
    align-items: center;
    padding:10px;  

`

export const OptionIcon = styled.div`
    width: 25px;
    height:25px;
    margin: 10px 10px;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const OptionText = styled.span`
    color: #000;
    font-size: 20px;
    margin-left: 15px;
`

export const SavedCounterContainer = styled.div`
    margin: 0 5px;
    padding: 2px;
    background-color: #e95555;
    border-radius:30px;
    width: 20px;
    height:20px;
    text-align: center;
`

export const UserIcon = styled(UserSVG)`
    width: 24px;
    height: 100%;
    margin: 0 5px;
    cursor: pointer;
        & path {
            fill: gray;
        }
        &:hover{
            & path {
               fill: ${({color}) => color };
            }
        }
`

export const HeartIcon = styled(HeartSVG)`
    width: 24px;
    height: 100%;
    margin: 0 5px;
    cursor: pointer;
        & path {
            fill: gray;
        }
        &:hover{
            & path {
               fill: ${({color}) => color };
            }
        }
`

export const HomeIcon = styled(HomeSVG)`
    width: 24px;
    height: 100%;
    margin: 0 5px;
    cursor: pointer;
        & path {
            fill: gray;
        }
        &:hover{
            & path {
               fill: ${({color}) => color };
            }
        }
`


export const BellIcon = styled(BellSVG)`
    width: 24px;
    height: 100%;
    margin: 0 5px;
    cursor: pointer;
        & path {
            fill: gray;
        }
        &:hover{
            & path {
               fill: ${({color}) => color };
            }
        }
`

export const EnvelopeIcon = styled(EnvelopeSVG)`
    width: 24px;
    height: 100%;
    margin: 0 5px;
    cursor: pointer;
        & path {
            fill: gray;
        }
        &:hover{
            & path {
               fill: ${({color}) => color };
            }
        }
`