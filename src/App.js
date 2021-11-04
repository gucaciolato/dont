import React, { useState } from 'react';
import * as s from './style';

export default function Todo() {
  const [task, setTask] = useState('');
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();

    // Evita adicionar tarefa sem nome
    if (task) {
      //Adiciona tarefa no fim do array
      setItemsList([...itemsList, task]);

      // Limpa o  s.Input
      setTask("");
    }
  }

  return (
  
  <s.ToDo>
      <s.Title>Don't</s.Title>
      <s.Form onSubmit={handleAddItemToList}>
        <s.Input type="text" onChange={(event) => handleChangeInput(event)} value={task} />
        <s.Button type="submit">Adicionar</s.Button>
      </s.Form>

      <s.Ul>
        {itemsList.map((item, index) => (
          <s.Li key={index} >{item}</s.Li>
        ))}
      </s.Ul>
  </s.ToDo>
  )
}
