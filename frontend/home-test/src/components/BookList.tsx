import React from 'react';
import { List, ListItem, ListItemText, Button, ListItemAvatar, Avatar, Divider } from '@mui/material';

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
}

interface BookListProps {
  books: Book[];
  onAdd: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onAdd }) => {
  return (
    <List>
      {books.map((book, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemAvatar sx={{ width: 80, height: 80 }}>
              <Avatar
                src={`src/${book.coverPhotoURL}`}
                alt={book.title}
                sx={{ borderRadius: 2, width: '100%', height: '100%' }}
              />
            </ListItemAvatar>
            <ListItemText primary={book.title} sx={{marginLeft: '10px'}} secondary={book.author} />
            <Button variant="contained" color="primary" sx={{backgroundColor: '#5acccc'}} onClick={() => onAdd(book)}>
              Add
            </Button>
          </ListItem>
          {index < books.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default BookList;
