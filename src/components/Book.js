import React from 'react';

function Book({ title, subtitle, authors, link, description, image, Button }) {
    return (
        <div>
            <h3>{title}</h3>
            {subtitle && <h5>{subtitle}</h5>}
            <a target="_blank" rel="noopener noreferrer" href={link}>
                View
            </a>
            <Button />
            <p>Written by {authors}</p>
            <img src={image} alt={title} />
            <p>{description}</p>
        </div>
    )
}

export default Book;