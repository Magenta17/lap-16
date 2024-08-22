import react, { useState } from 'react';
function MyComponent () {

    const [name, setname] = useState() ;

    const updateName = () => {
        setname("sponge");
    };


    return (
        <div>
            <p>name : {name}</p>
            <button onClick={updateName}>click to update</button>
        </div>
    );
   
}

export default MyComponent