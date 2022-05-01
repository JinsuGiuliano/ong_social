import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton from '../../../components/utils/custom-button/custom-button.component';
import { FileUploader } from "react-drag-drop-files";
import FormInput from '../../../components/utils/form-input/form-input.component'
import { EditProfileContainer, EditProfileTop, CloseIcon, EditProfileForm, 
    EditFormInput, InputLabel, InputInput, EditIcon , InputInputImage} from './editProfile.styles';

import { selectCurrentUser } from '../../../redux/user/user.selectors';

const EditProfile = ({setEdit, edit}) => {
        
        const dispatch = useDispatch()
        const currentUser = useSelector(selectCurrentUser)
        const fileTypes = ["JPG", "PNG", "JPEG"];
        const [data, setData ] = useState(currentUser)
        const [editImage, setEditImage] = useState(true)
        const [editBackG, setEditBackG] = useState(true)

        const ImageHandleChange = file => {
            setData({...data, photo: file})
            console.log(data)
        };

        const BackGroundHandleChange = file => {
            setData({...data, photoBg: file})
            console.log(data)

        };
        const handleChangeInput = event => {
            const { value, name } = event.target;
        
            setData({ ...data,[name]: value });
          };

        const onSubmit = () => {
            dispatch()
        } 
        
        return (
            <EditProfileContainer>
                <EditProfileTop>
                    <div><CloseIcon color='black' onClick={()=>setEdit(!edit)}/></div>
                    <div> <span> EDITAR PERFIL </span> </div>
                    <div> <CustomButton onClick={()=> onsubmit()}> Guardar </CustomButton> </div>
                </EditProfileTop>
                <EditProfileForm>
                <EditFormInput>

                <InputLabel><span>Profile background: </span></InputLabel>
                {
                    data.photoBG && editBackG?
                    <InputInputImage>
                            <div><img src={data.photo} alt='' width={80}/></div>
                            <div><EditIcon color='black' onClick={()=> setEditBackG(!editBackG)}/></div>
                    </InputInputImage>
                    :
                    <InputInputImage>
                        <div><FileUploader
                            type="file"
                            handleChange={BackGroundHandleChange}
                            name="photoBg" 
                            types={fileTypes}
                        /></div>
                        <div><CloseIcon color='black' onClick={()=> setEditBackG(!editBackG)}/></div>
                    </InputInputImage>
                }
        </EditFormInput>
                    <EditFormInput>

                        <InputLabel><span>Profile Image: </span></InputLabel>
                        {
                            data.photo && editImage?
                            <InputInputImage>
                                    <div><img src={data.photo} alt='' width={80}/></div>
                                    <div><EditIcon color='black' onClick={()=> setEditImage(!editImage)}/></div>
                            </InputInputImage>
                            :
                            <InputInputImage>
                                <div><FileUploader
                                    type="file"
                                    handleChange={ImageHandleChange}
                                    name="photo" 
                                    types={fileTypes}
                                /></div>
                                <div><CloseIcon color='black' onClick={()=> setEditImage(!editImage)}/></div>
                            </InputInputImage>
                        }
                </EditFormInput>
                <EditFormInput>
                    <InputLabel><span>Name: </span></InputLabel>
                    <InputInput>
                        <FormInput   
                            type='text'
                            name='name'
                            label='Display Name'
                            handleChange={handleChangeInput}
                            value={data.name}
                            isPost
                            required
                        />
                    </InputInput>
                </EditFormInput>
                <EditFormInput>
                    <InputLabel><span>Email: </span></InputLabel>
                    <InputInput>
                        <FormInput   
                            type='text'
                            name='email'
                            label='Email'
                            value={data.email}
                            handleChange={handleChangeInput}
                            isPost
                            required
                        />
                    </InputInput>
                </EditFormInput>
                </EditProfileForm>

            </EditProfileContainer>
        );
}

 

export default EditProfile;
