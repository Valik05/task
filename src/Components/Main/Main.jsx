import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../actions/actions';
import Loader from '../Loader/Loader';
import { v4 as uuidv4 } from 'uuid';
import './main.css'
import { useContext, useEffect } from 'react';
import { ModalContext } from '../../context/ModalContext';
import Edit from '../Forms/Edit';
import productService from '../../Services/productService';
import WriteComment from '../Forms/WriteComment';
const Main = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state);
    const { products, loading } = productList;
    const {handleModal} = useContext(ModalContext)


    const deleted = (id) =>{
        const editedArr = products.filter(item => item.id !== id)
        dispatch(addProduct(editedArr))
    }
    const getProducts = async () => {
        const products = await productService.getProduct().then((response) => response);
        dispatch(addProduct(products))
    }
    useEffect(()=>{
        getProducts()
    },[])

    if(loading) return <Loader/>
    return (
        <main>
            {products.map(({id, imageUrl, name, count, size, weight, comments}) => {
                return (
                    <ul style={size} key={uuidv4()}>
                        <li key={uuidv4()}>{name}</li>
                        <div className="ul-foto">
                        <li key={uuidv4()}><img src={imageUrl} alt="" /></li>
                        </div>
                        <div className="ul-details">
                            <h2>Details</h2>
                            <li key={uuidv4()}>Count - {count}</li>
                            <li key={uuidv4()}>Weight - {weight}</li>
                            </div>
                        <div className="ul-comments">
                            <h2>Comments</h2>
                            <li key={uuidv4()}>{comments.map(({id, productId, description, date}) =>{
                            return (
                                <ul className='comments' key={uuidv4()}>
                                    <div className='comments-id-description'>
                                    <li key={uuidv4()}>{description}</li>
                                    </div>
                                    <li key={uuidv4()} className="comments-date">{date}</li>
                                </ul>
                            )
                        })}</li>
                        </div>
                        <div className="ul-btns">
                            <button onClick={() => handleModal(<Edit id={id} name={name} count={count} weight={weight}/>) } key={uuidv4()}>Edit</button>
                            <button onClick={() => deleted(id)} key={uuidv4()}>Delete</button>
                            <button onClick={() => handleModal(<WriteComment productId={id} />)} key={uuidv4()}>Write a comment</button>
                        </div>
                    </ul>
                )
            })}
        </main>
    );
};

export default Main;