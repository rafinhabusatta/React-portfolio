import React from "react";
import "./style.css";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {btnState: "btn--inactive", isBtnActive: false}
    }

    btnActive = () => { 
        this.setState(
            {
                btnState: "btn--active",
                isBtnActive: true
        }
        )
        console.log(this.state.isBtnActive)
     }

     renderActionBtn = () => {
         if(this.state.isBtnActive){
            return (
                <div>
                    <p>true</p>
                </div>
             )
         }
        //  this.inactiveBtn()
             
            
     }

     inactiveBtn = () => {
        if(this.state.isBtnActive) {
            this.setState(
                {
                    btnState: "btn--inactive",
                    isBtnActive: false
            }
            )
            return (
                <div>
                <p>false</p>
            </div>
             )
         }
     }


    render() {
        return(
            <button className={`btn ${this.state.btnState}`} onClick={this.btnActive}>
                <i class={`fa ${this.props.icon} btn-icon`}></i>{this.props.buttonName}
            </button>
            
        )
    }
}

export default Button;