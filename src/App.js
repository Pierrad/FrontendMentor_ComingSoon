import React, { useState, useEffect } from 'react'
import * as SC from './AppStyled'

function App() {

  const [input, setInput] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [width, setWidth] = useState(1400)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange)
      setIsMobile(width <= 768)
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange)
      }
  }, [width])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const isEmailValid = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    setIsValidEmail(re.test(String(input).toLowerCase()))
  }


  return (
    <SC.Container>
      <SC.WrapperLeft>
        <SC.Logo src="/images/logo.svg"/>
        {isMobile && (
          <SC.ImgMobile src="/images/hero-mobile.jpg"/>
        )}
        <SC.Title>We're</SC.Title>
        <SC.Subtitle>Coming <br /> Soon</SC.Subtitle>
        <SC.Text>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with annoucements and our launch deals.</SC.Text>
        <SC.InputWithButton>
          <SC.Input type="text" name="inputEmail" placeholder="Email Adress" onChange={handleChange} isValid={isValidEmail}/>
          {!isValidEmail && <SC.ErrorImg src="/images/icon-error.svg"/> }
          <SC.Button onClick={isEmailValid}> <SC.Img src="/images/icon-arrow.svg"/> </SC.Button>
        </SC.InputWithButton>
        {!isValidEmail && <SC.ErrorText>Please provide a valid email</SC.ErrorText>}
      </SC.WrapperLeft>
      {!isMobile && (
        <SC.WrapperRight>
          <SC.Img src="/images/hero-desktop.jpg"/>
        </SC.WrapperRight>
      )}
    </SC.Container>
  )
}

export default App
