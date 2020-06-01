import React from 'react';

function Content({ children }) {
    return (
        <div className="content container mx-auto py-4">{children}</div>
    )
}

export default Content;