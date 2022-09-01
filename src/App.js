import "./App.css";
import UseReducerCounter from "./components/useReducerDemos/UseReducerCounter";
import UseReducerReduxStyle from "./components/useReducerDemos/UseReducerReduxStyle";
import FetchWithUseState from "./components/useReducerDemos/FetchWithUseState";
import FetchWithUseReducer from "./components/useReducerDemos/FetchWithUseReducer";
import NonOptimizedDualCounter from "./components/useCallbackDemos/NonOptimizedDualCounter";
import OptimizedDualCounter from "./components/useCallbackDemos/OptimizedDualCounter";
import ExpensiveFunction from "./components/useMemoDemos/ExpensiveFunction";
import DomRef from "./components/useRefDemos/DomRef";
import WebApiHandlerRef from "./components/useRefDemos/WebApiHandlerRef";
import CounterWithoutHook from "./components/customHooksDemos/CounterWithoutHook";
import CounterWithHooks from "./components/customHooksDemos/CounterWithHooks";
function App() {
  return (
    <div className="App">
      <UseReducerCounter></UseReducerCounter>
      <UseReducerReduxStyle></UseReducerReduxStyle>
      <FetchWithUseState></FetchWithUseState>
      <FetchWithUseReducer></FetchWithUseReducer>
      <NonOptimizedDualCounter></NonOptimizedDualCounter>
      <OptimizedDualCounter></OptimizedDualCounter>
      <ExpensiveFunction></ExpensiveFunction>
      <DomRef></DomRef>
      <WebApiHandlerRef></WebApiHandlerRef>
      <CounterWithoutHook></CounterWithoutHook>
      <CounterWithHooks></CounterWithHooks>
    </div>
  );
}

export default App;
