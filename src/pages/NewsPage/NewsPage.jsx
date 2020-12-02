import React from 'react';
import { Redirect } from 'react-router-dom';
import Article from '../../components/Article';
import './NewsPage.css';

const NewsPage = (props) => {
    return (
        <div>
            {!props.user ? <Redirect to="/" /> :     
            <>
                <h1>Welcome <span className="welcome">{props.user}</span>! Here are your headlines:</h1>
                <br/><br/>
                <div className='btn btn-warning' onClick={props.removeUser}>Logout</div>
                {props.articles.map((article, idx) => (
                <Article 
                source={article.source.name}
                author={article.author}
                title={article.title}
                url={article.url}
                key={idx}
                />
            ))}
          </>
          }
        </div>
    )
}

export default NewsPage;