import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

const Edit = () => {
  const [titulo, settitulo] = useState('');
  const [genero, setgenero] = useState(0);
  const [estudio, setestudio] = useState('');
  const [precio, setprecio] = useState('');
  const [esbr, setesbr] = useState('');
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "products", id);
    const data = {
      titulo,
      genero,
      estudio,
      precio,
      esbr,
      stock
    };
    await updateDoc(product, data);
    navigate('/');
  };

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, "products", id));
    if (product.exists()) {
      const productData = product.data();
      settitulo(productData.titulo);
      setgenero(productData.genero);
      setestudio(productData.estudio);
      setprecio(productData.precio);
      setesbr(productData.esbr);
      setStock(productData.stock);
    } else {
      console.log('El producto no existe');
    }
  };

  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Editar Producto</h1>
          <form onSubmit={update}>
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
              <label className='form-label'>genero</label>
              <input
                value={genero}
                onChange={(e) => setgenero(e.target.value)}
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
            <button type='submit' className='btn btn-primary'>Actualizar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
