import {useRef} from "react";

export default  function RefComp() {

    const inputRef = useRef(null)

    function handleClick(){

        inputRef.current.focus();

    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <input ref={inputRef}/>
        </div>
    );
};