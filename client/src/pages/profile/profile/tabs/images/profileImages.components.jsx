import React from 'react';
import { ImageContainer } from './profileImages.styles';

const ProfileImages = (url) => {
    return(
        <ImageContainer imageUrl={url.url}/>
    )
}

export default ProfileImages;