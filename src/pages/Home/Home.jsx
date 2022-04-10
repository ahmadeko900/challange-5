import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import SearchBar from '../../components/barSearch/barSearch'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
  <>
    <Navbar />
    <Hero />
    <main>
      <SearchBar />
    </main>
    <Footer />
  </>
  )
}

export default Home