import React, {useState} from 'react';

// Animation and Styled
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { fadeIn } from '../animations';

// Image
import logo from '../img/logo.svg';

// Redux and Routes
import {fetchSearch} from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  }

  const clearSearched = () => {
    dispatch({type: "CLEAR_SEARCHED"});
  }

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
        <Logo onClick={clearSearched}>
            <img src={logo} alt='log' />
            <h1>Ignite</h1>
        </Logo>
        <form className="search" onSubmit={submitSearch}>
            <input value={textInput} onChange={inputHandler} type="text" />
            <button type='submit' >Search</button>
        </form >
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: .5rem;
        border: none;
        margin-top: 1rem;
        -webkit-box-shadow: 0px 0px 31px -2px rgba(0, 0, 0, 0.13);
        -moz-box-shadow: 0px 0px 31px -2px rgba(0, 0, 0, 0.13);
        box-shadow: 0px 0px 31px -2px rgba(0, 0, 0, 0.13);
        &:focus {
            outline: 1px solid #ff7676;
        }
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding:  .5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        width: 2rem;
        height: 2rem;
        object-fit: contain;
    }
`;

export default Nav;