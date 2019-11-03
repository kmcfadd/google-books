import React, { Component } from 'react';
import API from '../utils/API';
import Form from '../components/Form';
import Book from '../components/Book';

class Home extends Component {
    state = {
        books: [],
        q: '',
        message: 'Search for a book'
    };

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    getBooks = () => {
        API.getBooks(this.state.q)
            .then(res => 
                this.setState({
                    books: res.data
                }))
                .catch(() =>
                this.setState({
                    books: [],
                    message: 'No books found'
                }))
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks()
    }

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id)

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks())
    };

    render() {
        return(
            <div>
                <h1>Google Book Search</h1>
                <Form 
                    handleInput={this.handleInput}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q}
                />
            {this.state.books.length ? (
                <ul>
                    {this.state.books.map(book => (
                        <Book
                            key={book.id}
                            title={book.volumeInfo.title}
                            subtitle={book.volumeInfo.subtitle}
                            link={book.volumeInfo.infoLink}
                            authors={book.volumeInfo.authors.join(" , ")}
                            description={book.volumeInfo.description}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            Button={() => (
                                <button 
                                onClick={() => this.handleBookSave(book.id)}>
                                    Save
                                </button>
                            )}
                        />
                    ))}
                </ul>
                 ) : (
                     <h2>{this.state.message}</h2>
                 )}
            </div>
        )
    }
}

export default Home;