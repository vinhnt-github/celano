import React from 'react';

function Loading({ tag, text, ...props }) {
    return (
        <div>
            Loading.....
        </div> 
    )
}


export default React.memo(Loading);