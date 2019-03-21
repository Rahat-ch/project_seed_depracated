import React, { Component } from "react";
import logo from "../assets/images/psLogo.png"


class Logo extends React.Component{
    render(){
        return(
            <img
            src={logo}
            style={{ height: 350, position: "relative", top: 100 }}
          />
    )
}
}

export default Logo