import React, { useState } from "react";

interface AddTodoViewProps {
  title?: string;
}

const AddTodoView: React.FC<AddTodoViewProps> = (props) => {
  const [todo, setTodo] = useState<AddTodoViewProps | {}>();


  
  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input type="text" id="title" placeholder="Title" onChange={handleArticleData} />
      <button disabled={article === undefined ? true : false}>Add article</button>
    </form>
  );
};

export default AddTodoView;
