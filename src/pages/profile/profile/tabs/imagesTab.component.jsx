import React from "react";
import { GalleryContainer } from "./images/profileImages.styles";
import ProfileImages from "./images/profileImages.components";
const ImagesTab = ({images}) => {
    console.log('images: ', images)
    return(

        <GalleryContainer>
        {
            images &&
            images.map( (image, idx) => (
                    <ProfileImages key={idx} url={image}/> 
                    ))
        }

        </GalleryContainer>
    )
}

export default ImagesTab;