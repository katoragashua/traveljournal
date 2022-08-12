
import React from "react"
import Header from "./components/Header"
import Cards from "./components/Cards"
import data from "./data.js"

export default function App() {
    const cardDetails = data.map(item => {
        return (
            <Cards 
                key = {data.indexOf(item)}
                item = {item}
                />
                )
    })
    return (
        <div className="container" >
            <Header />
            <section className="cards-container">
                {cardDetails}
            </section>
        </div>
    )
}

