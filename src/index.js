import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

const HelloWorld = () => {
    return (
    	<div>
	        <h1>
	            Hello World
	        </h1>
	        <Button className="row">Click</Button>
        </div>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));