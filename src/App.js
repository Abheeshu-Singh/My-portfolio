import React from "react";

import './App.scss'
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Email from "./components/Email/Email";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Links from "./components/Links/Links";
import Work from "./components/Work/Work";

const App = () => (
  <main className="container">
  <Layout>

  <Links/>

   <Email/>

   <Hero/>

  <About/>

   <Work/>

  <Contact/>
  </Layout>
   
  </main>
)

export default App
