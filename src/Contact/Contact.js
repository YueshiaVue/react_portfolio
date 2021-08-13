import React from 'react';

function Contact () {
    return <div>
        <h1>Contact</h1>
        <form>
            <div>
            <label>Name:</label>
            <input type="text" id="name" ></input>
            </div>
            <div>
            <label>Email Adress:</label>
            <input type="text" id="email" ></input>
            </div>
            <div>
            <label>Message:</label>
            <input type="text" id="message" ></input>
            </div>
            
        </form>
    </div>
}

export default Contact