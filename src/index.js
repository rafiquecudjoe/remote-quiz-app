import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SidebarProvider } from "./context/SidebarContext";
import { Windmill } from "@windmill/react-ui";
import { createStore } from "redux";
import { Provider } from "react-redux";

export const SETQUESTIONSACTION = (value) => ({
  type: "SET_QUESTIONS",
  payload: value,
});
export const deletequizaction = (value) => ({
  type: "DELETE_QUIZ",
  payload: value,
});

const QuestionReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return { ...state, questions: [...state.questions, action.payload] };
    
      case "DELETE_QUIZ":
        return {
          ...state,
          questions: state.questions.filter((questions, index) => questions.name !== action.payload.name),
        };

    default:
      return state;
  }
};

const Store = createStore(QuestionReducer, {
  questions: [],
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Windmill>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </Windmill>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
