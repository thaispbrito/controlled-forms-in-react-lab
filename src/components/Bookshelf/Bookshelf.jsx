import { useState } from 'react';

const Bookshelf = () => {

  const [books, setBooks] = useState([
    { title: "Sophie's World", author: "Jostein Gaarder", notes: "\"It's not a silly question if you can't answer it.\"" },
    { title: "Pride and Prejudice", author: "Jane Austen", notes: "\"Till this moment I never knew myself.\"" },
    { title: "The Alchemist", author: "Paulo Coelho", notes: "\"There is only one thing that makes a dream impossible to achieve: the fear of failure.\"" },
  ]);

  const [newBook, setNewBook] = useState(
    { title: '', author: '', notes: '' },
  );

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // Prevent default event behavior to reload the page
    event.preventDefault();
    // Update the books array state with this new list to include the newly added book
    setBooks([...books, newBook]);
    // Reset the newBook state
    setNewBook({
      title: '',
      author: '',
      notes: '',
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
          <label htmlFor="notes">Notes: </label>
          <textarea
            id="notes"
            name="notes"
            value={newBook.notes}
            onChange={handleInputChange}
            placeholder="Write your favorite quotes or personal impressions..."
            rows={5} 
            cols={40} 
          />

          <button type="submit" >Add Book</button>

        </form>

      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div className="bookCard" key={index}>
            <h4><strong>{book.title}</strong></h4> 
            <p>by {book.author}<br /><br /><em>{book.notes}</em></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookshelf;




