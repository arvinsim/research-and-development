import React, {createContext, useContext, useState} from 'react';

const IncrementContext = createContext<{
    value: number
    incrementValue(): void
}>({
    value: 0,
    incrementValue: () => {}

})

function ContextTest() {
    return (<IncrementContextComponent>
        <LevelTwo />
        </IncrementContextComponent>
    );
}

function LevelFive() {
    const {value, incrementValue} = useContext(IncrementContext);

    return <div>
        <h1>The current increment is {value}</h1>
        <button onClick={incrementValue}>Increment</button>
    </div>
}

function LevelFour() {
    return <LevelFive />
}

function LevelThree() {
    return <LevelFour />
}

function LevelTwo() {
    return <LevelThree />
}

const IncrementContextComponent: React.FC<React.ReactNode> = ({ children }) => {
    const [value, setValue] = useState(0)
    const incrementValue = () => setValue(value + 1)

    return <IncrementContext.Provider value={{value, incrementValue}}>
        {children}
    </IncrementContext.Provider>
}


export default ContextTest;
