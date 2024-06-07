import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

interface BookListProps {
  books: { title: string; author: string }[];
  onAdd: (book: { title: string; author: string }) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onAdd }) => {
  if (books.length !== 0) {
    <ListItem>
      <ListItemText primary="No books found" />
    </ListItem>
  }
  return (
    <List>

        {books.map((book, index) => (
        <ListItem key={index}>
          <ListItemText primary={book.title} secondary={book.author} />
          <Button variant="contained" style={{backgroundColor: '#335c6e'}} onClick={() => onAdd(book)}>
            Add
          </Button>
        </ListItem>
        ))}
    </List>
  );
};

export default BookList;
