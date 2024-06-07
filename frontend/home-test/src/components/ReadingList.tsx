import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

interface ReadingListProps {
  books: { title: string; author: string }[];
  onRemove: (book: { title: string; author: string }) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({ books, onRemove }) => {
  return (
    <List>
      {books.map((book, index) => (
        <ListItem key={index}>
          <ListItemText primary={book.title} secondary={book.author} />
          <Button variant="contained" style={{backgroundColor: '#f76434'}} onClick={() => onRemove(book)}>
            Remove
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ReadingList;
