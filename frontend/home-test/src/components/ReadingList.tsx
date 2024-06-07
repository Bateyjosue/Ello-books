import React from 'react';
import { List, ListItem, ListItemText, Button, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { Book } from './BookAssigmentView';

interface ReadingListProps {
  books: Book[];
  onRemove: (book: Book) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({ books, onRemove }) => {
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
            <Button
              variant="contained"
              style={{ backgroundColor: '#f76434' }}
              onClick={() => onRemove(book)}
            >
              Remove
            </Button>
          </ListItem>
          {index < books.length - 1 && <Divider />} {/* Add a divider after each item except the last one */}
        </React.Fragment>
      ))}
    </List>
  );
};

export default ReadingList;
