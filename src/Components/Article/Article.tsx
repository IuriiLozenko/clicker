import React from "react";

interface ArticleProps {
    text: string;
}

const Article = (props: ArticleProps) => {
  return (
    <article>
        <p>{props.text}</p>
      <h3>Siema tu ja</h3>
      <p>Halo</p>
    </article>
  );
};

export default Article;
