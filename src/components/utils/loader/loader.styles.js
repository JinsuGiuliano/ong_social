import styled, { keyframes, css }  from "styled-components"

export const backgroundAnimation = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`
const loadingBg = css`
background-size: 200% 200%;
background-image: -webkit-linear-gradient(67deg, #4285f4, #4842f4,#b042f4,rgba(176,66,244,0.4) );
animation: ${backgroundAnimation} 1s ease infinite;
`

export const LoadingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
position: fixed;
top: 0;
z-index: 99999999999999999999;
${loadingBg};
`

export const LoaderText = styled.span`
    font-size: 50px;
    font-weight: 200;
    color: white;
`