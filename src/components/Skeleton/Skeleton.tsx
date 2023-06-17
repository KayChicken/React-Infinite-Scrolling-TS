import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton : React.FC<any> = (props : any) => (
    <ContentLoader 
    speed={2}
    width={700}
    height={549}
    viewBox="0 0 700 549"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="367" rx="0" ry="0" width="600" height="158" /> 
    <rect x="0" y="313" rx="0" ry="0" width="600" height="42" /> 
    <rect x="0" y="-1" rx="0" ry="0" width="600" height="300" />
  </ContentLoader>
)

export default Skeleton