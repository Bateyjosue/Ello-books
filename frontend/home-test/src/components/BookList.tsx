import React from 'react';
import { List, ListItem, ListItemText, Button, ListItemAvatar, Avatar } from '@mui/material';
import { Book } from './BookAssigmentView';

interface BookListProps {
  books: Book[];
  onAdd: (book: Book) => void;
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
          <ListItemAvatar sx={{ width: 80, height: 80 }}>
            <Avatar src={`src/${book.coverPhotoURL}`} alt={book.title} sx={{ borderRadius: 2, width: '100%', height: '100%' }}/>
          </ListItemAvatar>
          <ListItemText primary={book.title} secondary={book.author} sx={{marginLeft: '10px'}} />
          <Button variant="contained" style={{backgroundColor: '#335c6e'}} onClick={() => onAdd(book)}>
            Add
          </Button>
        </ListItem>
        ))}
    </List>
  );
};

export default BookList;
