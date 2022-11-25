import './App.css'
import "../../svelte/dist/assets/index.a940edb9.js";
import {useEffect, useRef, useState} from "react";

function App() {
    const [readCounter, setReadCounter] = useState(0);

    const ref = useRef<Element>(null);

    useEffect(() => {
        if (ref && ref.current) {
            ref.current.addEventListener("on-increment", (ev) => {
                const customEvent = ev as any as { detail: { value: number } };

                setReadCounter(customEvent.detail.value);
            })

        }
    }, [ref])

    // @ts-ignore
    let element = <test-counter ref={ref}/>;
    return <>
        <p>Counter from WebComponent is: {readCounter}</p>
        {element}</>

}

export default App
