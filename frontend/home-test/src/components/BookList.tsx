import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

interface BookListProps {
  books: { title: string; author: string }[];
  onAdd: (book: { title: string; author: string }) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onAdd }) => {
  return (
    <List>
      {books.map((book, index) => (
        <ListItem key={index}>
          <ListItemText primary={book.title} secondary={book.author} />
          <Button variant="contained" color="primary" onClick={() => onAdd(book)}>
            Add
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
