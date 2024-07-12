import React from 'react';

const ListaTarefas = ({ tarefas }) => {
  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))}
    </ul>
  );
};

export default ListaTarefas;
