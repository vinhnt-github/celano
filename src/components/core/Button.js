import React from 'react';

function Button({ tag, text, ...props }) {
    return (
            
        React.createElement('div',"",
            React.createElement(tag,{...props},text)
        )
               
    )
}


export default React.memo(Button);