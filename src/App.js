import React from "react";
import "./App.css";
import Header from './components/Header'
import Card from './components/Card'
import {data} from "./data.js"

const App = () => {

    return(
        <main className="main">
            <Header 
                {...data.user}
                {...data.navigaton}
            />
            <section className="cards">
                <Card
                    title = "E-commerce em HTML e CSS"
                    
                />
                <Card
                    title = "App do Salário do Vendedor em JS"
                    
                />
                <Card
                    title = "E-commerce em HTML e CSS"
                    
                />
                <Card
                    title = "Portfolio em React JS"
                    
                />
            </section>

        </main>
    )
}

export default App;