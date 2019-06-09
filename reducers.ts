import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
} from "./actions";
import produce from "immer";
import { combineReducers } from "redux";

const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter;
    }
  });

const todos = (state = [], action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case ADD_TODO:
        draft.push({
          text: action.text,
          completed: false,
        });
        break;
      case TOGGLE_TODO:
        const completed = draft[action.index].completed;
        draft[action.index].completed = !completed;
        break;
    }
  });

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;
