import React from "react";
import Article from "./Article";

export default function ArticleList( {articles} ) {
    return (
        articles.map( article => {
            return <React.Fragment key={article.id}>
                <Article title={article.title} date={article.date} preview={article.preview}/>
                </React.Fragment>
        })
    )
}


