import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton : React.FC<any> = (props : any) => (
    <ContentLoader 
    speed={2}
    width={500}
    height={400}
    viewBox="0 0 500 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="88" y="96" rx="0" ry="0" width="1" height="53" /> 
    <rect x="23" y="-6" rx="0" ry="0" width="264" height="237" /> 
    <rect x="23" y="279" rx="0" ry="0" width="264" height="25" /> 
    <rect x="23" y="244" rx="0" ry="0" width="264" height="25" />
  </ContentLoader>
)

export default Skeleton