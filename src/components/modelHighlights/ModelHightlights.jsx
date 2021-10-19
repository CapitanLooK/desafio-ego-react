import React from 'react'

export const modelHighlights = (title, content, image) => {
    return(
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}