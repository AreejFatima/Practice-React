import React from "react";
import * as R from "ramda";

const Articles = ({ articles }) => {
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {R.map(
            ({ title, upvotes, date }) => (
              <>
                <tr data-testid="article" key="article-index">
                  <td data-testid="article-title">{title}</td>
                  <td data-testid="article-upvotes">{upvotes}</td>
                  <td data-testid="article-date">{date}</td>
                </tr>
              </>
            ),

            articles
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
