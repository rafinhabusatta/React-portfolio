import React from "react";
import "./style.css"
import Button from "../Button";

function Header(props) {
    return (
        <header>
            <div className="header-background"></div>
            <img src={props.picture} alt="Rafael Lacerda image"></img>
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
            <div className="menu-links">
                <a href={props.linkedin} target="_blank">
                    <i class="fab fa-linkedin-in icon"></i>
                    <span>LinkedIn</span>
                </a>
                <a href={props.behance} target="_blank">
                    <i class="fab fa-behance icon"></i>
                    <span>Behance</span>
                </a>
                <a href={props.github} target="_blank">
                    <i class="fab fa-github icon"></i>
                    <span>GitHub</span>
                </a>
            </div>
            <nav className="navbar-buttons">
                <Button
                    buttonName = "Go Beyond"
                    icon = "fa-rocket"
                />
                <Button 
                    buttonName = "Bootstrap"
                    icon = "fa-drafting-compass"
                />
                <Button 
                    buttonName = "Outros projetos"
                    icon = "fa-code"
                />
            </nav>
            
        </header>
    )
}

export default Header;