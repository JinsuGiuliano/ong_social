import styled  from 'styled-components'
import { ReactComponent as UserSVG  } from '../../../assets/icons/user.svg'
import { ReactComponent as HeartSVG  } from '../../../assets/icons/heart.svg'
import { ReactComponent as HomeSVG  } from '../../../assets/icons/home.svg'
import { ReactComponent as BellSVG  } from '../../../assets/icons/bell.svg'
import { ReactComponent as EnvelopeSVG  } from '../../../assets/icons/envelope.svg'



export const MainMenuContainer = styled.div`
    @media only screen and (max-width: 700px){
        display: flex;
        margin: 0px;
        height:50px;
        width: 100%;
        z-index:99999999;    
    }
       
    display:none;

`

export const MenuContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: center;
    bottom: 5;
    background-image: -webkit-linear-gradient(67deg,#b042f4, #4842f4 );
    align-items:center;
    width:100%;
    z-index:9999999999;
    box-shadow: 1px 1px 8px #ddd;

`

export const OptionContainer = styled.div`
    width: 100%;
    height:40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2px 2px;  
    cursor:  ${({ currentUser }) => currentUser?'pointer': 'inherit' };  
`

export const ProfileOptionContainer = styled.div`
        display:none; 


`
export const PostOptionContainer = styled.div`
        display:none;
`

export const OptionIcon = styled.div`
    width: 25px;
    height:25px;
    padding: 10px 10px;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const OptionText = styled.span`
        display:none;
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
            fill: #ddd;
        }
        &:hover{
            & path {
               fill: #fff;
            }
        }
`

export const HeartIcon = styled(HeartSVG)`
    width: 24px;
    height: 100%;
    margin: 0 5px;
    cursor: pointer;
    & path {
            fill: #ddd;
        }
        &:hover{
            & path {
               fill: #fff;
            }
        }
`

export const HomeIcon = styled(HomeSVG)`
    width: 24px;
    height: 100%;
    margin: 0 5px;
    cursor: pointer;
    & path {
            fill: #ddd;
        }
        &:hover{
            & path {
               fill: #fff;
            }
        }
`


export const BellIcon = styled(BellSVG)`
    width: 24px;
    height: 100%;
    margin: 0 5px;
    cursor: pointer;
    & path {
            fill: #fff;
        }
        &:hover{
            & path {
               fill: #fff;
            }
        }
`

export const EnvelopeIcon = styled(EnvelopeSVG)`
    width: 24px;
    height: 100%;
    margin: 0 5px;
    cursor: pointer;
        & path {
            fill: #ddd;
        }
        &:hover{
            & path {
               fill: #fff;
            }
        }
`

export const OptionsListContainer = styled.div`
    display:flex;
    flex-direction: row;
    width:100%;
`