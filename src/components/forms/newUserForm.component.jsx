import React,{Component, Fragment, useState} from 'react'
import { FormMainContainer, FormContainer, FormTxt, FormTxtSmall, OptionButton, ButtonsContainer } from './forms.styles'
import OngDetailsForm from './ongDetails.component'
import UserDetailsForm from './userTypeForm.component'

const NewUserForm = () => {

    const [currentStep, setCurrentStep ] = useState(1) 
    const [ONG, setONG] = useState(false)

    const _next = () => {
        let cntStep = currentStep;
        cntStep = cntStep >= 2? 3: cntStep + 1;
        setCurrentStep(cntStep)
      }
    
     const _prev = () => {
      let cntStep = currentStep;
      cntStep = cntStep <= 1? 1: cntStep - 1
        setCurrentStep(cntStep)
      }

    const handleChange = (event) => {
      const {name, value} = event.target
      // setState({
      //   ...state,
      //   [name]: value
      // }) 
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()
    }
        return(
            <FormMainContainer>
            <FormContainer>
            {
                currentStep ==1 ?
                <Fragment>
                    <div>
                        <FormTxt> ANTES DE EMPEZAR NOS GUSTARÍA SABER EL USO QUE HARÁS DE ESTA APP</FormTxt>
                    </div>
                    <div>
                        <FormTxtSmall> QUE TIPO DE USUARIO QUIERES SER?</FormTxtSmall>
                        <ButtonsContainer>                
                          <OptionButton onClick={()=> { _next(); setONG(true)}}>ONG</OptionButton>
                          <OptionButton onClick={()=> {_next(); setONG(false)}}>INDIVIDUAL</OptionButton>
                        </ButtonsContainer>
                    </div>
                </Fragment>: null
            }
            {
                currentStep !== 1 && ONG === true ?
                <OngDetailsForm _prev={_prev} />: null
            }
            {
                currentStep !== 1 && ONG === false ?
                <UserDetailsForm _prev={_prev} />: null
            }
      
            </FormContainer>
            </FormMainContainer>
        )

}

export default NewUserForm;