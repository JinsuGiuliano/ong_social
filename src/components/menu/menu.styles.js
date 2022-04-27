import styled  from 'styled-components'

export const MainMenuContainer = styled.div`
    width: 20%;
    margin-top: 80px;
`

export const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    position: fixed;
    flex-direction: column;

`

export const OptionContainer = styled.div`
    border-radius: 25%;
    height:40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
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

