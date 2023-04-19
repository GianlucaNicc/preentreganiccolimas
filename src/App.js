import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
};


const apiUrl = 'https://api.mercadopago.com/';

const getProducts = async () => {
  // Código para obtener los productos de la API de Mercado Pago
}

const createOrder = async (orderData) => {
  // Código para crear una orden de compra en la API de Mercado Pago
}

const getPaymentMethods = async () => {
  // Código para obtener los métodos de pago disponibles en la API de Mercado Pago
}

const executePayment = async (paymentData) => {
  // Código para ejecutar el pago en la API de Mercado Pago
}


export default App;
