import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'

const Home = () => {
  return (
    <Container>
      <ImgSlider />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh -250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: calc(3.5vw + 5px);

  &:after{
    background: url('/imgs/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    z-index: -1;
    opacity: 1;
  }
`

export default Home