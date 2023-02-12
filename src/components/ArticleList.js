import React from 'react';
import Article from './Article'

function ArticleList({articles}) {
    const articleElements = articles.map((article) => {
        return <Article key={article.title} title={article.title} date={article.date} preview={article.preview} />
    })
    return (
        <main>
            {articleElements}
        </main>
    )
}

export default ArticleList;