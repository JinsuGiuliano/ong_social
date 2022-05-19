import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton from '../../../components/utils/custom-button/custom-button.component';
import { FileUploader } from "react-drag-drop-files";
import FormInput from '../../../components/utils/form-input/form-input.component'
import { EditProfileContainer, EditProfileTop, CloseIcon, EditProfileForm, 
    EditFormInput, InputLabel, InputInput, EditIcon , InputInputImage} from './editProfile.styles';

import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { updateUserStart } from '../../../redux/user/user.actions';

const EditProfile = ({setEdit, edit}) => {
        
        const dispatch = useDispatch()
        const currentUser = useSelector(selectCurrentUser)
        const fileTypes = ["JPG", "PNG", "JPEG"];
        const [data, setData ] = useState({...currentUser, files:false})
        const [editImage, setEditImage] = useState(true)
        const [editBackG, setEditBackG] = useState(true)
        const [ photoFile, setPhotoFile ] = useState(null)
        const [ photoBgFile, setPhotoBgFile ] = useState(null)

        const FilePhotoHandleChange = file => {
            setPhotoFile(file)
            setData({...data, files: true})
        };

        const FilePhotoBgHandleChange = file => {
            setPhotoBgFile(file)
            setData({...data, files:true})
        };


        const handleChangeInput = event => {
            const { value, name } = event.target;
            setData({ ...data,[name]: value });
          };

        const onSubmit = () => {
            const user =    {
                ...data, 
                photo:photoFile? photoFile : data.photo, 
                photoBg:photoBgFile? photoBgFile : data.photoBg
            }
            console.log('OnSubmit: ',typeof user.photoBg)
            dispatch(updateUserStart(user))
        } 
        
        return (
            <EditProfileContainer>
                <EditProfileTop>
                    <div><CloseIcon color='black' onClick={() => setEdit(!edit)}/></div>
                    <div> <span> EDITAR PERFIL </span> </div>
                    <div> <CustomButton onClick={() => onSubmit()}> Guardar </CustomButton> </div>
                </EditProfileTop>
                <EditProfileForm>
                <EditFormInput>

                <InputLabel><span>Profile background: </span></InputLabel>
                {
                    data.photoBg && editBackG?
                    <InputInputImage>
                            <div><img src={data.photoBg} alt='' width={80}/></div>
                            <div><EditIcon color='black' onClick={()=> setEditBackG(!editBackG)}/></div>
                    </InputInputImage>
                    :
                    <InputInputImage>
                        <div><FileUploader
                            type="file"
                            handleChange={FilePhotoBgHandleChange}
                            name="photoBg" 
                            id="photoBg" 
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
                                    handleChange={FilePhotoHandleChange}
                                    name="photo" 
                                    id="photo" 
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
