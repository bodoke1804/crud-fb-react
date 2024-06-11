import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';

const Create = () => {
  const [titulo, settitulo] = useState('');
  const [estudio, setestudio] = useState('');
  const [genero, setgenero] = useState(0);
  const [precio, setprecio] = useState('');
  const [esbr, setesbr] = useState('');
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  const productsCollection = collection(db, "products");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(productsCollection, {
      titulo,
      estudio,
      genero,
      precio,
      esbr,
      stock
    });
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Agregar Producto</h1>
          <form onSubmit={store}>
            <div className='mb-3'>
              <label className='form-label'>titulo</label>
              <input
                value={titulo}
                onChange={(e) => settitulo(e.target.value)} 
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>estudio</label>
              <input
                value={estudio}
                onChange={(e) => setestudio(e.target.value)} 
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>genero</label>
              <input
                value={genero}
                onChange={(e) => setgenero(e.target.value)} 
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>precio</label>
              <input
                value={precio}
                onChange={(e) => setprecio(e.target.value)} 
                type='number'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>esbr</label>
              <input
                value={esbr}
                onChange={(e) => setesbr(e.target.value)} 
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Stock</label>
              <input
                value={stock}
                onChange={(e) => setStock(e.target.value)} 
                type='number'
                className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-primary'>Agregar</button>
          </form>   
        </div>
      </div>
    </div>
  );
}

export default Create;
