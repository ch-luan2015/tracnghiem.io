import { connect } from "react-redux";

import { AppState } from "store";
import { deleteTodo, addTodo } from "store/todo/actions";
import Controller from "./Controller";

const mapStateToProps = (state: AppState) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, { addTodo, deleteTodo })(Controller);
