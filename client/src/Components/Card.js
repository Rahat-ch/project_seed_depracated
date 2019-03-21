import React, { Component } from "react";
import Logo from "./Logo"



class Cards extends React.Component{
    render(){
        return(
        <div>
            <div className="ui card">
            <div className="image">
              <div style={{height:200,width:290,overflow:'hidden'}}><Logo /></div>
            </div>
            <div className="content">
              <a className="header">Kristy</a>
              <div className="meta">
                <span className="date">Joined in 2013</span>
              </div>
              <div className="description">
                Kristy is an art director living in New York.
              </div>
            </div>
            <div className="extra content">
              <a>
                <i className="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>

          </div>
          
         
    )
}
}

export default Cards