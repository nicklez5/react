import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddMenShirt(props) {
  const [name, setMenShirtName] = useState('');
  const [size,setSize] = useState('');
  const [img, setImg] = useState('');
  const [color, setColour] = useState('');
  const [price, setPrice] = useState('');
  const [show,setShow] = useState(props.show)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={props.toggleShow} 
    className="block m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
      + Add MenShirt
    </button>
      

      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add MenShirt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={(e) => {
            e.preventDefault()
            setMenShirtName('')
            setSize('')
            setImg('')
            setColour('')
            setPrice('')
            props.newMenShirt(name,size,img,color,price)
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
                placeholder="T-shirt"
                value={name}
                onChange={(e) => {setMenShirtName(e.target.value)}}
                />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="size">
                    Size
                </label>
                </div>
                <div className="md:w-3/4">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="size" 
                type="text"
                placeholder="Large|Medium|Small" 
                value={size}
                onChange={(e) => {setSize(e.target.value)}}
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
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="size">
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
            
            </form>
        </Modal.Body>
        <Modal.Footer>
          
          <button className = "bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.toggleShow}
          >Close
          </button>
          <button 
          className = "bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" 
          form="editmodal" >
            Add Clothes</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMenShirt;