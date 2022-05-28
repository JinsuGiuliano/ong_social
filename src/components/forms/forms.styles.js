import styled from 'styled-components'

export const FormMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 99999999999999999999;
    background-color: rgba(0, 0, 0, 0.63);
`


export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20%;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    z-index: 99999999999999999999;
    background-image: -webkit-linear-gradient(67deg,#b042f4, #4842f4 );
`

export const FormTxt = styled.span`
  margin: 5px 0;
  text-align:center;
  font-size: 30px;
  font-weight: 100;
  color:#fff;
`;

export const FormTxtSmall = styled.span`
  margin: 5px 0;
  text-align:center;
  font-size: 20px;
  font-weight: 100;
  color:#fff;
`;

export const OptionButton = styled.div`
  margin: 5px 3px;
  font-size: 25px;
  padding:20px;
  font-weight: 200;
  border-radius: 20px;
  color:#fff;
  border: 1px solid white;
  cursor:pointer;

  &:hover{
    background-color: white;
    color: #4842f4;
  }
`;


export const OptionCategoryButton = styled.div`
  margin: 5px 3px;
  padding: 5px;
  font-size: 20px;
  padding:5px;
  font-weight: 200;
  border-radius: 15px;
  background-color: ${({selected}) => selected?'transparent': 'white' };
  color:${({selected}) => selected?'white': '#4842f4' };
  border: 1px solid white;
  cursor:pointer;

  &:hover{
    background-color: transparent;
    color: white;
  }

`;

export const FormVerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 5px 0px;
`

export const Form2Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const CategoriesList = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const ButtonsContainer = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`