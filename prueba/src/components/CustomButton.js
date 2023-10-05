import React from 'react';
import Button from 'react-bootstrap/Button';

function CustomButton({ text, onClick }) {
  return (
    <Button
      variant="primary" 
      style={{
        backgroundColor: 'white',
        color: 'black',
        fontWeight: '500',
        borderRadius: '50px',
        borderColor: 'black',
        width: '120px', // Establece el ancho predeterminado en píxeles
        height: '40px', // Establece la altura predeterminada en píxeles
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default CustomButton;

