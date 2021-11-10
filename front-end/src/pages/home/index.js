import React, { useState } from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TrackingInfo from '../../components/trackingInfo';

const Home = () => {
    const [value, changevalue] = useState("");
    const [name, changename] = useState("");
    const [show, setShow] = useState(false);

    function handleChange(event) {
        changevalue(event.target.value);
    }

    function change() {
        changename(value);
        setShow(true);
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
                {show && name && <TrackingInfo/>}
            </header>
        </div>
    );
};
export default Home;
