import React from 'react';

const Article = (props) => (
    <div>
        <h3>Source: {props.source} </h3>
        <h3>Author: {props.author} </h3>
        <a href={props.url} target="_blank" rel="noreferrer">
        <h2>{props.title}</h2>
        </a>
        <hr />
    </div>
);

export default Article;