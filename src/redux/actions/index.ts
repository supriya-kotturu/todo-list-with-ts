import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Action<T, P> {
  type: T;
  payload?: P;
}

export interface FetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: response.data,
    });
  };
};
