import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return {
      initialInputState,
    };
  }

  return {
    initialInputState,
  };
};

const useHook = (validate) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const validateInput = validate(inputState.value);
  const hasError = !validateInput && inputState.isTouched;

  const enteredInputHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const onBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    userInput: inputState.value,
    validateInput,
    hasError,
    enteredInputHandler,
    onBlurHandler,
    reset,
  };
};

export default useHook;
