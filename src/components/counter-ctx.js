import { useReducer, createContext, useContext } from "react";

const CounterContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return state + 1;
        case "sub":
            return state - 1;
        default:
            return state;
    }
};

const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <CounterContext.Provider value={[state, dispatch]}>
            {children}
        </CounterContext.Provider>
    );
};

const AddOne = () => {
    const [, dispatch] = useContext(CounterContext);
    return (
        <div>
            <button onClick={() => dispatch({ type: "add" })}>Add one</button>
        </div>
    );
};

const SubOne = () => {
    const [, dispatch] = useContext(CounterContext);
    return (
        <div>
            <button onClick={() => dispatch({ type: "sub" })}>Sub one</button>
        </div>
    );
};

const DisplayCounter = () => {
    const [counter] = useContext(CounterContext);

    return <div>Counter: {counter}</div>;
};

export function Counter() {
    return (
        <CounterProvider>
            <DisplayCounter />
            <AddOne />
            <SubOne />
        </CounterProvider>
    );
}
