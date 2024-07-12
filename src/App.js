import './App.css';
import React, { useState, useCallback } from 'react';
import ListaTarefas from './components/ListaTarefas';

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const adicionarTarefa = useCallback(() => {
    if (novaTarefa.trim()) {
      setTarefas((prevTarefas) => [...prevTarefas, novaTarefa.trim()]);
      setNovaTarefa('');
    }
  }, [novaTarefa]);

  const handleChange = (event) => {
    setNovaTarefa(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    adicionarTarefa();
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={novaTarefa}
          onChange={handleChange}
          placeholder="Digite uma nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ListaTarefas tarefas={tarefas} />
    </div>
  );
};

export default App;

