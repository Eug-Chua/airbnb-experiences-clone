import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div>
          <Navbar />
          <Hero />
          <Card
            image="katie-zaferes.png"
            rating={5.0}
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
          />
        </div>
    )
}