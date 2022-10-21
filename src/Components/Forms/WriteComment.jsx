import React, { useContext, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import './form.css'
import { useDispatch } from 'react-redux';
import { writeComment } from '../actions/actions';
const WriteComment = ({ productId }) => {
    const dispatch = useDispatch()
    const { handleModal } = useContext(ModalContext)
    const [inputValue, setinputValue] = useState('')
    const handleInput = (e) => {
        const value = e.target.value;
        setinputValue(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(writeComment(inputValue,productId))
        handleModal()
    }
    return (
        <div className='container-form'>
            <form className='write-comment-form' onSubmit={onSubmit}>
                <textarea placeholder='Write a comment' value={inputValue} onChange={handleInput} />
                <button type='submit'>Post</button>
            </form>
        </div>
    );
};

export default WriteComment;