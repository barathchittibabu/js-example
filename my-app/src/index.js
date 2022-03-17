import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Login from './Login'; 

function Layout()
{
    return(
        // <h1>Hello World.....!</h1>,
        // <Counter name1={'barath'}/>,
        <Login/>
    )
}

ReactDOM.render(<Layout/>,document.getElementById('root'));