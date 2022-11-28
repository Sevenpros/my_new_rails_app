import React from "react";
import { useSelector } from 'react-redux';

const Greeting = () => {
    const greetings = useSelector((state) => state.greetingReducer.greeting);

    return ( <div>
        <h2>THESE ARE RANDOM GREETINGS</h2>
            <ul>
                <li>{greetings.message}</li>
            </ul>
        </div>
    )
}

export default Greeting;