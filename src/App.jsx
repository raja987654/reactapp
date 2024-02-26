import * as React from 'react';

const list = [
  { title: "react", url: "http://www.redux.org" },
];

function App() {
  return (
    <div>
      <h1>React app</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        className="photo"
      />
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.title}>
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