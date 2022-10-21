import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContext } from '../../context/ModalContext';
import { sorted } from '../actions/actions';
import Edit from '../Forms/Edit';
import './header.css'
const Header = () => {
    const {handleModal} = useContext(ModalContext);
    const dispatch = useDispatch();
    const sortType = (e) => {
        dispatch(sorted(e.target.value))
    }
    return (
        <header>
            <nav>
                <button>Home</button>
                <button>About</button>
                <span>Sort
                    <select name='Sort' onChange={sortType}>
                    <option value="Z-A">Z-A</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Max Count">Max Count</option>
                    <option value="Min Count">Min Count</option>
                </select>
                </span>
            </nav>
            <button className='header-add-form' onClick={() => handleModal(<Edit add />)}>Add product</button>
        </header>
    );
};

export default Header;