import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddWomenJogger(props) {
  const [name, setWomenJoggerName] = useState('');
  const [waist_size,setWaistSize] = useState('');
  const [img, setImg] = useState('');
  const [color, setColour] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [show,setShow] = useState(props.show)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={props.toggleShow} 
    className="block m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-11 rounded">
      + Add WomenJogger
    </button>
      

      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Jogger</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={(e) => {
            e.preventDefault()
            setWomenJoggerName('')
            setWaistSize('')
            setImg('')
            setColour('')
            setPrice('')
            setQuantity('')
            props.newWomenJogger(name,waist_size,img,color,price,quantity)
        }} 
        id="editmodal" className="w-full max-w-sm m-3">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                      Clothing name
                  </label>
                </div>
                <div className="md:w-3/4">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="name" 
                type="text"
                placeholder="Jogger"
                value={name}
                onChange={(e) => {setWomenJoggerName(e.target.value)}}
                />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="waist_size">
                    Waist Size
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="waist_size" 
                type="text"
                placeholder="Large|Medium|Small" 
                value={waist_size}
                onChange={(e) => {setWaistSize(e.target.value)}}
                />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="price">
                    Price
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="price" 
                type="number"
                placeholder="$3.50" 
                value={price}
                onChange={(e) => {setPrice(e.target.value)}}
                />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="color">
                    Colour
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="color" 
                type="text"
                placeholder="Orange" 
                value={color}
                onChange={(e) => {setColour(e.target.value)}}
                />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="Image">
                      Image URL
                  </label>
                </div>
                <div className="md:w-3/4">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="img" 
                placeholder="https://google.com"
                type="text" 
                value={img}
                onChange={(e) => {setImg(e.target.value)}}
                />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="quantity">
                      Quantity
                  </label>
                </div>
                <div className="md:w-3/4">
                  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="quantity" 
                    type="number"
                    placeholder="0" 
                    value={quantity}
                    onChange={(e) => {setQuantity(e.target.value)}}
                  />
                </div>
            </div>
            
            </form>
        </Modal.Body>
        <Modal.Footer>
          
          <button className = "bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.toggleShow}
          >Close
          </button>
          <button 
          className = "bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" 
          form="editmodal" >
            Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddWomenJogger;