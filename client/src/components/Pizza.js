import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import {addToCart} from '../actions/cartActions'
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function Pizza({ pizza }) {

    AOS.init()

    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch()
    function addtocarts(){
        dispatch(addToCart(pizza,quantity,varient))
    }

    return (
        <div
        data-aos='zoom-in'
        className="shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <picture>
                <img src={pizza.image} alt="pizza" className="img-fluid " style={{ height: '125px', width: '200px' }} />
                </picture>
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className="form-control" value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>

                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className="form-control" value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className="flex-container">
                <div className="m-1 w-100">
                    <h1 className="mt-1">Price : {pizza.prices[0][varient] * quantity}Rs/-</h1>
                </div>
                <div className="m-1 w-100">
                    <button className="btn" onClick={addtocarts}> Add To Cart</button>
                </div>
            </div>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} alt="pizza" className="img-fluid w-100" style={{height:'200px'}}/>
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
