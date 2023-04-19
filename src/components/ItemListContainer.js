import React from 'react';

const name = prompt('¡Bienvenido/a! ¿Cuál es tu nombre?');
alert(`Hola, ${name}! ¡Gracias por visitarnos!`);

const ItemListContainer = () => {
  return (
    <div className="item-list-container">
      <p>Selecciona uno de nuestros productos para comenzar a comprar</p>
    </div>
  );
};


export default ItemListContainer;
