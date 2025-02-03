import React from 'react'

const Heading = ({className,type,children}) => {
    const headingStyles = {
        primary: "text-center text-white text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-6 font-semibold !leading-120",
        secondary: "text-center text-white text-4xl md:text-5xl xl:text-[64px] 2xl:text-7xl mb-6 font-extrabold !leading-120",
        default: "",
      };
  return (
    <h2 className={`${headingStyles[type]} ${className}`}>
        {children}
    </h2>
  )
}

export default Heading