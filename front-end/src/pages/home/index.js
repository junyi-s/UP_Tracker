import React, { useState } from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [value, changevalue] = useState("");
    const [name, changename] = useState("");
    function handleChange(event) {
        changevalue(event.target.value);
    }

    function change() {
        changename(value);
    }
    return (
        <div className="App">
            <header className="App-header">
                <header className="form">
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter tracking number"
                    />
                </header>
                <header classname="button">
                    <button onClick={change}>Submit</button>
                </header>
                <p>
                    Your tracking number is: {name}
                </p>
            </header>
        </div>
    );
};
export default Home;
