import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContext } from '../../context/ModalContext';
import { edit,addNewProduct } from '../actions/actions';
import './form.css'
const Edit = ({id, name, count, weight, add}) => {
    const {handleModal} = useContext(ModalContext)
    const [inputValue, setinputValue] = useState({
        id: id || '' ,
        name: name || '',
        count: count || '',
        weight: weight || '',

    })
    const disptach = useDispatch()

    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name
        setinputValue((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(add){
            disptach(addNewProduct(inputValue))
        }
        disptach(edit(inputValue))
        handleModal()

    }
    return (
        <div className='container-form'>
            <form className='add-product-form' onSubmit={onSubmit}>
                <h2>{add ? "Add product " : "Edit product"}</h2>
                <div className='add-product-foto'>
                    <span>Choose a foto -</span>
                    <input type="file" />
                </div>
                <div>
               <input type="text" placeholder='Product name' name='name' value={inputValue.name} onChange={handleInput}/>
                </div>
                <div>
               <input type="text" placeholder='Count' name='count' value={inputValue.count} onChange={handleInput}/>
                </div>
                <div>
               <input type="text" placeholder='Weight' name='weight' value={inputValue.weight} onChange={handleInput}/>
                </div>
                <button type='submit'>{add ? "Add product " : "Edit product"}</button>
            </form>
        </div>
    );
};

export default Edit;