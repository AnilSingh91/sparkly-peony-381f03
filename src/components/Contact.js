import React from 'react';
import useState from 'react'

const Contact = () => {
   
    const postToOrigin = () => {
       if (window && window.parent) {
           window.parent.postMessage({ key : 'iframeData', value : document.getElementById('textInput').value  }, 'https://loquacious-kulfi-116f70.netlify.app/');
       }
    }

    return (
        <div className="row cal-section">
            <div className="col-12">
                <label>Put down some text to be sent to Parent window</label>
                <br/>
                <input id="textInput" type="text"></input>
                <br/>
                <br/>
                <button onClick={postToOrigin}>POST TO ORIGIN</button>
            </div>
        </div>

    );

}

export { Contact };
