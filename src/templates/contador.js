import React from "react";

const contador = ( contex ) => {
  return (
    <div>
      <h1>Contador</h1>
      <p>Outros dados...</p>

      <pre>{JSON.stringify(contex, null, 2)}</pre>
    </div>
  );
};

export default contador;
