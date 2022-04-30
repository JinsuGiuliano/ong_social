import styled from 'styled-components';
import { ReactComponent as HeartSVG  } from '../../../assets/icons/heart.svg'
import { ReactComponent as ClapSVG  } from '../../../assets/icons/clap.svg'
import { ReactComponent as ShareSVG  } from '../../../assets/icons/share.svg'
import { ReactComponent as ImageSVG  } from '../../../assets/icons/image.svg'

export const PostContainer = styled.div`
    width: 95%;
    padding: 20px 10px;
    display: flex;
    flex-direction:row;
    margin: 5px 0px;
    cursor: pointer;

    &:hover{
        background-color: #f7f7f7;
    }
`

export const PostUserIcon = styled.img`
    border-radius:30px;
    width: 50px;
    height: 50px;
`

export const PostContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: normal;
`

export const PostUserInfoContainer = styled.div`
    width: 550px;
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: flex-start;
    align-items: center;
` 

export const PostActionsContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: flex-end;
    align-items: center;
` 

export const InfoTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    align-items: baseline;
    justify-content: flex-start;
` 

export const PostText = styled.span`
    color: #000;
    margin-left: 50px;
    font-size: 14px;
`

export const CreatePostContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export const UserInfoChild  = styled.div`
    margin-right: 4px; 
`

export const HeartIcon = styled(HeartSVG)`
width: 24px;
height: 100%;
margin: 0 5px;
cursor: pointer;
& path {
  fill: ${({color}) => color };
}
&:hover{
    & path {
  fill: red;
}
}
`


export const ClapIcon = styled(ClapSVG)`
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
export const ShareIcon = styled(ShareSVG)`
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

export const ImageIcon = styled(ImageSVG)`
    width: 18px;
    height: 100%;
    margin: 0 5px;
    cursor: pointer;

        & path {
            fill: #4285f4;
        }
        &:hover{
            & path {
                fill: #357ae8;
            }   
        }
`

export const PostImage = styled.div`
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    border-radius:25px;
    margin:10px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`