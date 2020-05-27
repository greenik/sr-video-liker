import React from 'react';

function Content(props) {
    return (
        <div className="flex px-10">{props.children}</div>
    )
}

export default Content;