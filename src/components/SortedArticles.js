import React, { useState } from "react";
import Articles from "./Articles";

const SortedArticles = ({ articles }) => {
  const defaultSorted = articles.sort((a, b) => b.upvotes - a.upvotes);
  const [sortedArticles, setSortedArticles] = useState(defaultSorted);

  function sortByUpvotes() {
    const tempArr = [...articles];
    tempArr.sort((a, b) => b.upvotes - a.upvotes);
    setSortedArticles(tempArr);
  }

  function sortByDate() {
    const tempArr = [...articles];
    tempArr.sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedArticles(tempArr);
  }

  return (
    <div className="App">
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={sortByUpvotes}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={sortByDate}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={sortedArticles} />
    </div>
  );
};

export default SortedArticles;
