import React, { useState } from "react";
import { TodoState } from "store/todo/types";
import { addTodo, deleteTodo } from "store/todo/actions";
import View from "./View";

interface AddTodoProps {
  title?: string;
}

const AddTodoView: React.FC<AddTodoProps> = (props) => {
  const [todo, setTodo] = useState<AddTodoProps | {}>();

  // const addNewArticle = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   addTodo(article);
  // };

  return <View />;
};

export default AddTodoView;
