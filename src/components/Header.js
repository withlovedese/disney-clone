import React, { useEffect } from 'react'
import styled from 'styled-components'
import { signInWithPopup, auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserName, selectUserEmail, selectUserPhoto, login, logout } from '../features/user/userSlice'

const Header = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const setUser = (user) => {
        dispatch(login({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }

    const signIn = () => {
        //google authentication stuff
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
            navigate('/')
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
      auth.onAuthStateChanged(async (authUser) => {
            if (authUser){
                setUser(authUser)
                navigate('/home');
            }
      })
    }, [userName])
    

  return (
    <Nav>
        <Logo src='/imgs/logo.svg' alt='Disney+ logo'/>

        {
            !userName ? (
                <Login onClick={signIn}>LOGIN</Login>
            ): (
                <>
                    <NavMenu>
                        <a href="/home">
                            <img src="/imgs/home-icon.svg" alt="home icon" />
                            <span>HOME</span>
                        </a>
                        <a href="/search">
                            <img src="/imgs/search-icon.svg" alt="search icon" />
                            <span>SEARCH</span>
                        </a>
                        <a href="/watchlist">
                            <img src="/imgs/watchlist-icon.svg" alt="watchlist icon" />
                            <span>WATCHLIST</span>
                        </a>
                        <a href="/original">
                            <img src="/imgs/original-icon.svg" alt="original icon" />
                            <span>ORIGINAL</span>
                        </a>
                        <a href="/movie">
                            <img src="/imgs/movie-icon.svg" alt="movie icon" />
                            <span>MOVIES</span>
                        </a>
                        <a href="/series">
                            <img src="/imgs/series-icon.svg" alt="series icon" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <SignOut onClick={signOut}>
                        <UserImage src={userPhoto}/>
                        <Dropdown>
                            <span>Sign Out</span>
                        </Dropdown> 
                    </SignOut>
                    
                </>
                
            )
                
        }
        {/* <Login onClick={signIn}>LOGIN</Login> */}
    </Nav>

    
  )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo = styled.img`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
            width: 20px;
            margin-right: 10px;
            z-index: auto;
        }

        span{
            color: rgb(249, 249, 249);
            font-size: 13px;
            padding-top: 3px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            white-space: nowrap;
            position: relative;

            &:before{
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -8px;
                content: '';
                height: 2px;
                opacity: 0;
                position: absolute;
                left: 0px;
                right: 0px;
                transform-origin: center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                visibility: hidden;
                width: auto;
            }
        }

        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }

    }

    

    @media (max-width: 768px) {
        display: none;
    }

`

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 5px;
    font-weight: bold;
    transition: 400ms ease 0s;

    &:hover{
        background-color: white;
        color: rgb(0, 0, 0);
        border-color: transparent;
    }

`

const UserImage = styled.img`
    border-radius: 50px;
    height: 50px;
    object-fit: contain;
`

const Dropdown = styled.div`
    position: absolute;
    top: 52px;
    right: 2px;
    background-color: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0);
    border-radius: 5px;
    box-shadow: rgb(0, 0, 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 13px;
    letter-spacing: 3px;
    width: 100px;
    text-align: center;
    opacity: 0;

`
const SignOut = styled.div`
    position: relative;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover{
        ${Dropdown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }
`

export default Header