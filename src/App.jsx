import React from 'react';

function App() {
  const list = [
    { objectID: 1, url: 'https://example.com/1', title: 'Item 1', author: 'Author 1', num_comments: 10, points: 20 },
    { objectID: 2, url: 'https://example.com/2', title: 'Item 2', author: 'Author 2', num_comments: 15, points: 25 },
    { objectID: 3, url: 'https://example.com/3', title: 'Item 3', author: 'Author 3', num_comments: 20, points: 30 }
  ];

  return (
    <div>
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
