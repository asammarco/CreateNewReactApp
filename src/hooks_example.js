// RENAME THIS FILE TO APP
import React, { useState, useEffect, useMemo, useCallback } from 'react';

export default function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAddTech = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  useEffect(() => {
    const localTechs = localStorage.getItem('techs');

    if (localTechs) {
      setTechs(JSON.parse(localTechs));
    }
  }, []); // Executa somente uma vez no início

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]); // Executa smepre que houver alteração na variável techs

  const techsSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>Você possui {techsSize} tecnologias.</strong>
      <br />
      <input
        type="text"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAddTech}>
        Adicionar
      </button>
    </>
  );
}
