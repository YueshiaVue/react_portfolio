import React, {useState} from 'react';

function Contact () {
    const [nameState,setNameState] = useState('');
    const [nameEmail, setEmailState] = useState('');
    const [nameMessage, setMessageState] = useState('');
    const [submitSend,setSubmitSend] =useState(false);

    const nameStateOnChange = (e) => {
        let name = e.target.value
        setNameState(name);
    }

    const nameEmailOnChange = (e) => {
        let name = e.target.value
        setEmailState(name);
    }

    const nameMessageOnChange = (e) => {
        let name = e.target.value
        setMessageState(name);
    }
    
    const onSubmit = () => {
        setNameState('')
        setEmailState('')
        setMessageState('')
        setSubmitSend(true)
        setTimeout(()=> {
            setSubmitSend(false);
        },1000)
    };
    
    return (
        <div>
        { submitSend ? <div style={{marginTop:'1em'}}>Complete</div> :
            <div>
            <h1>Contact</h1>
            <form>
                <div>
                    <label>Name:</label>
                </div>
                <div>
                    <input
                        type="text"
                        id="name"
                        value={nameState}
                        onChange={nameStateOnChange}
                    />
                </div>
                <div>
                <label>Email Adress:</label>
                </div>
                <div>
                    <input 
                        type="text" 
                        id="email" 
                        value={nameEmail}
                        onChange={nameEmailOnChange}
                    />
                </div>
                <div>
                <label>Message:</label>
                </div>
                <div>
                <textarea 
                type="text" 
                id="message" 
                rows='4' 
                cols='30'
                value={nameMessage}
                onChange={nameMessageOnChange}
                />
                </div>
            </form>
            <button
            onClick={onSubmit}
            >Submit</button>
        </div>
        }
        </div>
    )
}

export default Contact