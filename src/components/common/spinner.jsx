import React from 'react'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SpinnerBox = () => {
  return (

  <div className="h-screen flex items-center justify-center">
      <Loader
        // That is Loader Type // Ball-Triangle
        // Bars // Circles// Grid // Hearts // Oval // Puff
        // Rings // TailSpin
        // ThreeDots
        
        type="ThreeDots"
        color="red"
        height={100}
        width={100}
        timeout={1000} //3 secs
      />
    </div>
  )
}

export default SpinnerBox;
