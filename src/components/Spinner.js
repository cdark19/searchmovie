import React from "react";
import Loader from "react-loader-spinner";
import '../css/index.css'

const Spinner = () => {
  //other logic

  return (
    <div className="loader">
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Spinner;
