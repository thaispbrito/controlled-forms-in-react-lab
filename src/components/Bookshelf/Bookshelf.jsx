import { useState } from 'react';

const Bookshelf = () => {

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState(
    { title: '', author: '' },
  );

  const handleInputChange = (event) => {
    // console.log("setting newBook to: ", { ...newBook, [event.target.name]: event.target.value });
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // Prevent default event behavior to reload the page
    event.preventDefault();
    // Update the books array state with this new list to include the newly added book
    setBooks([ ...books, newBook ]);
    // Reset the newBook state
    setNewBook({
      title: '',
      author: '',
    });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>

        <form onSubmit={handleSubmit}>

          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            // Use the value attribute to display the current state
            value={newBook.title}
            // Use the onChange attribute to update the state as the user types
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />

          <button type="submit" >Submit</button>

        </form>

      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div className="bookCard" key={index}>
            <strong>{book.title}</strong> by {book.author}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookshelf;




