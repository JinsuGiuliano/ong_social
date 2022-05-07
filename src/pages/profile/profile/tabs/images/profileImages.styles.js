import styled from 'styled-components'

export const GalleryContainer = styled.div`
    width: 90%;
    display: inline-flex;
`

export const ImageContainer = styled.div`
    width: 100px;
    height:100px;
    margin: 5px;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`