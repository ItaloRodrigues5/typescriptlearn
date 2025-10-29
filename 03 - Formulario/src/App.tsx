import React, { useState, FormEvent } from 'react';
import ImageCard from './components/ImageCard';
import ImageCats from './components/ImageCats';

// Componente principal da aplicação.
// Aqui poderíamos definir rotas ou layout principal.
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Minha Lista de Imagens de Gatos 📝</h1>
      <ImageCats />
    </div>
  );
}

export default App;
