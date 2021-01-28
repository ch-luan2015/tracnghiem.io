import React, { useState } from "react";
import styles from "./styles.module.scss";

interface AddTodoViewProps {
  title?: string;
}

const AddTodoView: React.FC<AddTodoViewProps> = (props) => {
  const [todo, setTodo] = useState<AddTodoViewProps | {}>();

  return (
    <form className={styles.Add_article}>
      <input type="text" id="title" placeholder="Title" />
      <button>Add article</button>
    </form>
  );
};

export default AddTodoView;

// onSubmit={addNewArticle}
// onChange={handleArticleData}
// disabled={title === undefined ? true : false}
