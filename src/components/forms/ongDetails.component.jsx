import { push } from 'firebase/database';
import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { firestore } from '../../firebase/firebase.utils';
import { updateUserStart } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import FormInput from '../utils/form-input/form-input.component';
import { FormVerticalContainer, FormContainer, OptionCategoryButton, FormTxtSmall, OptionButton, CategoriesList, ButtonsContainer } from './forms.styles'

const OngDetailsForm = ({_prev}) => {
    const dispatch = useDispatch()

    const details = {
        username: '',
        description:'',
        categories:[]
    } 

    const currentUser = useSelector(selectCurrentUser)
    const [ description, setDescription ] = useState('')
    const [ categories, setCategories ] = useState([])
   

    const [ Details, setDetails ] = useState(details)
    
    const handleChange = event => { 
        const { value, name } = event.target;
        setDetails({...Details, [name]:value})
    };

    const saveChanges = () => {
        dispatch(updateUserStart(
            {
                ...currentUser,
                categories:[...Details.categories],
                description: Details.description, 
                username: Details.username, 
                isNGO:true
            }
        ))
    }

    const AddToCategories = (cat, idx) => {
        Details.categories.push(cat);
        setCategories(categories.map(c => 
            Object.keys(c)[0] === cat ? 
            {[cat]:true} : c
        ))
    }
    useEffect(()=>{
        
        const fetchCategories = async() => {
            const cRef =  collection(firestore, "categories") 
            const cSnap = await getDocs(cRef)
           setCategories(cSnap.docs.map(c => {return({[c.id]: false})}))
        } 
        
        fetchCategories().catch(console.error);
        
    },[])

    return(

        <FormContainer>
            <FormVerticalContainer>
             <FormTxtSmall> NGOs NAME </FormTxtSmall>
                 <FormInput 
                    type='text'
                    name='username'
                    value={Details.username}
                    onChange={handleChange}
                    rows="4" cols="50"
                    required
                    isPost
                 />
             </FormVerticalContainer>
            <FormVerticalContainer>
                <FormTxtSmall> NGOs DESCRIPTION</FormTxtSmall>
                <FormInput 
                    type='textarea'
                    name='description'
                    value={Details.description}
                    onChange={handleChange}
                    rows="10" cols="50"
                    required
                    isPost
                />
            </FormVerticalContainer>
            <FormVerticalContainer>
                <FormTxtSmall> CATEGORIES </FormTxtSmall>
                <CategoriesList>
                    {
                        categories &&
                        categories.map( (c, idx) => 
                                <OptionCategoryButton
                                    key={idx}  
                                    onClick={ ()=> 
                                       !Details.categories.includes(Object.keys(c)[0])? AddToCategories(Object.keys(c)[0], idx): ()=>{}
                                    } 
                                    selected={Details.categories.includes(Object.keys(c)[0])? true: false}
                                    > 
                                    
                                    { Object.keys(c)[0] } 
                                </OptionCategoryButton>
                        )
                    }
               </CategoriesList>
            </FormVerticalContainer>
            <ButtonsContainer>                
                <OptionButton onClick={ () => _prev() } >BACK</OptionButton>
                <OptionButton onClick={ () => saveChanges() } >SAVE</OptionButton>

            </ButtonsContainer>

        </FormContainer>
    )

}

export default OngDetailsForm;