import { ADD_BOOK } from "../constants";
import uuid from "uuid";

const addBookAction = (title, author) => {
  return {
    type: ADD_BOOK,
    payload: { title, author, id: uuid() }
  };
};

export default addBookAction;
