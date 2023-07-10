import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={1000}
    height={480}
    viewBox="0 0 1000 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="50" y="255" rx="5" ry="5" width="200" height="34" /> 
    <rect x="70" y="303" rx="13" ry="13" width="160" height="48" /> 
    <rect x="30" y="365" rx="12" ry="12" width="240" height="35" /> 
    <rect x="80" y="410" rx="10" ry="10" width="140" height="27" /> 
    <rect x="283" y="10" rx="0" ry="0" width="1" height="425" />
    <circle cx="150" cy="130" r="120" /> 
    <rect x="300" y="10" rx="45" ry="45" width="163" height="185" /> 
    <rect x="300" y="205" rx="45" ry="45" width="163" height="185" /> 
    <rect x="473" y="8" rx="45" ry="45" width="163" height="185" /> 
    <rect x="473" y="206" rx="45" ry="45" width="163" height="185" /> 
    <rect x="646" y="8" rx="45" ry="45" width="163" height="185" /> 
    <rect x="646" y="206" rx="45" ry="45" width="163" height="185" />
    <rect x="819" y="8" rx="45" ry="45" width="163" height="185" /> 
    <rect x="819" y="206" rx="45" ry="45" width="163" height="185" />
  </ContentLoader>
)

export default Skeleton