import React, { Component } from 'react';
import Book from '../components/Book';
import API from '../utils/API';

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks();
    };

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res => 
                this.setState({
                    books: res.data
            }))
            .catch(err => console.log(err))
    };

    handleBookDelete = id => {
        API.deleteBook(id).then(res => this.getSavedBooks)
    };

    render() {
        return (
            <div>
                <h1>Google Books Search</h1>
                <h2>Search for and Save Books</h2>

                {this.state.books.length ? (
                    <ul>
                        {this.state.books.map(book => (
                            <Book
                                key={book._id}
                                title={book.title}
                                subtitle={book.subtitle}
                                link={book.link}
                                authors={book.authors.join(', ')}
                                description={book.description}
                                image={book.image}
                                Button={() => (
                                    <button 
                                        onClick={() => this.handleBookDelete(book._id)}
                                    >
                                        Delete
                                    </button>
                                )}
                            />
                        ))}
                    </ul>
                ) : (
                    <h2>No Saved Books</h2>
                )}
            </div>
            
        )
    }
}

export default Saved;