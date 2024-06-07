import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import SearchBar from './SearchBar';
import BookList from './BookList';
import ReadingList from './ReadingList';

const BookAssignmentView: React.FC = () => {
  const [books, setBooks] = useState<{ title: string; author: string }[]>([]);
  const [readingList, setReadingList] = useState<{ title: string; author: string }[]>([]);

  const handleSearch = (searchTerm: string) => {
    // Mock search function
    const mockBooks = [
      { title: 'Book 1', author: 'Author 1' },
      { title: 'Book 2', author: 'Author 2' },
    ];
    const filteredBooks = mockBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  const addBookToReadingList = (book: { title: string; author: string }) => {
    setReadingList([...readingList, book]);
  };

  const removeBookFromReadingList = (bookToRemove: { title: string; author: string }) => {
    setReadingList(readingList.filter(book => book !== bookToRemove));
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <BookList books={books} onAdd={addBookToReadingList} />
        </Grid>
        <Grid item xs={6}>
          <ReadingList books={readingList} onRemove={removeBookFromReadingList} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookAssignmentView;
