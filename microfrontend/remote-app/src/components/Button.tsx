import React from 'react';

const Button = () => {
  return <button onClick={log2}>Remote Button WITH A LOT</button>;
};

export default Button;
function log2(event: any) {
  console.log('salero');
}
