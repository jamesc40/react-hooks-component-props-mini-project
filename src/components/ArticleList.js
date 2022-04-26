import React from 'react';
import Article from './Article'

const ArticleList = ({posts}) => {
    console.log(posts)
    return (
        <main>{posts.map(post => Article(post))}</main>
    )
}

export default ArticleList;