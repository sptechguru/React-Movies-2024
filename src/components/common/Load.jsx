import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends React.Component {
  //other logic
  render() {
    return (
      <div className="container mx-auto">
        <Loader
          type="Hearts"
          color="red"
          height={300}
          width={300}
          timeout={1000} //3 secs
        />
      </div>
    );
  }
}
