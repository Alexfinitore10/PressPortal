import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function CreaArticoloComp() {
  const [titolo, setTitolo] = useState('');
  const [contenuto, setContenuto] = useState('');
  const [immagineCopertina, setImmagineCopertina] = useState(null);
  const [categoria, setCategoria] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dati articolo:', { titolo, contenuto, immagineCopertina, categoria });
    // Qui implementerai la logica per inviare i dati al backend
    setTitolo('');
    setContenuto('');
    setImmagineCopertina(null);
    setCategoria('');
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-blue-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center bg-blue-100 p-4 rounded">Crea un Nuovo Articolo</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-blue-100 p-4 rounded">
        <div>
          <label htmlFor="titolo" className="block text-sm font-medium text-gray-700">Titolo</label>
          <input
            type="text"
            id="titolo"
            value={titolo}
            onChange={(e) => setTitolo(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="contenuto" className="block text-sm font-medium text-gray-700">Contenuto (Markdown supportato)</label>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => setIsPreview(!isPreview)}
              className="mb-2 px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
            >
              {isPreview ? 'Modifica' : 'Anteprima'}
            </button>
          </div>
          {isPreview ? (
            <div className="prose prose-lg mt-1 p-4 border rounded-lg bg-gray-50">
              <ReactMarkdown>{contenuto}</ReactMarkdown>
            </div>
          ) : (
            <textarea
              id="contenuto"
              value={contenuto}
              onChange={(e) => setContenuto(e.target.value)}
              rows="10"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            ></textarea>
          )}
        </div>
        <div>
          <label htmlFor="immagineCopertina" className="block text-sm font-medium text-gray-700">Immagine di Copertina</label>
          <input
            type="file"
            id="immagineCopertina"
            onChange={(e) => setImmagineCopertina(e.target.files[0])}
            className="mt-1 block w-full"
            accept="image/*"
          />
        </div>
        <div>
          <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          >
            <option value="">Seleziona una categoria</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="viaggi">Viaggi</option>
            <option value="cibo">Cibo</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Crea Articolo
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreaArticoloComp;
