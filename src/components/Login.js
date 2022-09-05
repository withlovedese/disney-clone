import React from 'react'
import styled from 'styled-components'
import CTALogoOne from './CtaLogoOne'

const Login = (props) => {
  return (
    <div>
        <Container>
            <Content>
                <CTA>
                    <LogoOne/>
                    <SignUp>
                        GET IT ALL HERE
                    </SignUp>
                    <Description>
                    Get The Disney Bundle to stream the best movies, shows, and sports with Disney+, Hulu, and ESPN+. Terms Apply. Learn more about The Disney Bundle.
                    </Description>
                    <CTALogoTwo src='./imgs/cta-logo-two.png'/>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    </div>
  )
}

const Container = styled.section`
    overflow:hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`
const Content = styled.div`
    margin-bottom: 10px;
    width: 100%;
    postion: relative;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`
const BgImage = styled.div`
    background-image: url('./imgs/login-background.jpg');
    background-size: cover;
    background-position: top;
    position: absolute;
    z-index: -10;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
`
const CTA = styled.div`
    margin-bottom: 10px;
    display: flex;
    max-width: 650px;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    text-align: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`
// const CTALogoOne = styled.img`
//     margin-bottom: 10px;
//     max-width: 600px;
//     min-height: 1px;
//     display: block;
//     width: 100%;
// `

const LogoOne = styled(CTALogoOne)`
    margin-bottom: 10px;
    max-width: 650px;
    min-height: 1px;
    display: block;
    width: 100%;
    height: 100%;
`

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 5px;

    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 12px;
    margin: 0 0 24px;
    letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`

export default Login