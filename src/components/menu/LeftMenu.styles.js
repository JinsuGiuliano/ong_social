import styled  from 'styled-components'

export const MainMenuContainer = styled.div`
    width: 25%;
    margin-top: 80px;
`

export const MenuContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items:flex-start;
    

`

export const OptionContainer = styled.div`
    height:40px;
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
    bottom:2;
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

