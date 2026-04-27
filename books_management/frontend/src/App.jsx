import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [books, setBooks] = useState([]);

  const getBooks = () => {
    axios.get('http://localhost:8080/api/books')
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h1>📚 Books Management</h1>

      <button className="btn" onClick={getBooks}>
        Load Books
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;