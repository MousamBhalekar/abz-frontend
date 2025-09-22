"use client";
import React from 'react'
import { Header } from '../component/common/header'
import { Container } from '../component/elements/container/container'
import Footer from '../component/common/footer'
import CapabilitiesBanner from '../component/elements/hero-banner/capabilities-banner'

function About() {
  return (
    <div>
      <Header />
      <main className="flex-grow">
        <Container>
        <CapabilitiesBanner
            title={"Read The Story Behind Our Success"}
            description={"Reliably training & governing AI by feeding high quality language & vision inputs"}
            imageSrc={"/assets/bannerImage.png"}
            btnText={"Contact Us"}
          />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default About
