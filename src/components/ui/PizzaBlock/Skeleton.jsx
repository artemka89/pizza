import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={467}
    viewBox="0 0 280 467"
    backgroundColor="#f0f0f0"
    foregroundColor="#ffffff"
    {...props}
  >
    <circle cx="143" cy="129" r="120" /> 
    <rect x="30" y="274" rx="9" ry="9" width="219" height="24" /> 
    <rect x="0" y="321" rx="9" ry="9" width="279" height="80" /> 
    <rect x="0" y="418" rx="9" ry="9" width="95" height="43" /> 
    <rect x="130" y="418" rx="9" ry="9" width="148" height="43" />
  </ContentLoader>
)

export default Skeleton