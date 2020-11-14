import React, { useEffect, useState } from "react";
import Loader from 'react-loader-spinner'

export const Spinner = () =>{
    return(
        <Loader
        type="ThreeDots"
        color="#000"
        maxHeight={200}
        maxWidth={200}
        style={{display: 'flex'}}
        timeout={3000} //3 secs
     /> 
    )
}

export const LongSpinner = props =>{
    const [isSpinning, setSpinning] = useState(false)
    useEffect(() => {
        
        setSpinning(props.spinner)
    },[props])
    return(
        <>
        {isSpinning === true ?
        <Loader
        type="ThreeDots"
        color="#000"
        maxHeight={200}
        maxWidth={200}
        style={{display: 'flex'}}
     /> 
     : ''}
     </>
    )
}