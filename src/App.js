import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/home/Footer"
import Header from "./components/home/header/Header"
import HomePages from "./components/pages/HomePages"
import Aboutus1 from "./components/pageContent/Aboutus1"
import Contactus from "./components/pageContent/Contactus"


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePages} />
          <Route path='/pages' exact component={Aboutus1} />
          <Route path='/contact' exact component={Contactus} />
        </Switch>
        <Footer />
      </Router>
      
    </>
  )
}

export default App
