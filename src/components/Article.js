import React from "react";

const Article = ({
    id,
    title, 
    date = 'January 1, 1970',
    preview }) => {
        console.log(date);
        <article key={id}>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
}

export default Article;