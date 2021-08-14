import React from 'react';

function Contact () {
    return <div>
        <h1>Contact</h1>
        <form>
            <div>
            <label>Name:</label>
            </div>
            <div>
            <input type="text" id="name" ></input>
            </div>
            <div>
            <label>Email Adress:</label>
            </div>
            <div>
            <input type="text" id="email" ></input>
            </div>
            <div>
            <label>Message:</label>
            </div>
            <div>
            <textarea type="text" id="message" rows='4' cols='30'></textarea>
            </div>
            
        </form>
    </div>
}

export default Contact