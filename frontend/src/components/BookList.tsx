import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
}

interface BookListProps {
  books: Book[];
  onAction: (book: Book) => void;
  isAddMode: boolean;
}

const BookList: React.FC<BookListProps> = ({ books, onAction, isAddMode }) => {
  return (
    <List>
      {books.map((book, index) => (
        <React.Fragment key={index}>
          <ListItem sx={{
            padding: 2,
            '&:hover': {
              backgroundColor: '#335c6e10',
              borderRadius: 5,
            }
          }}>
            <ListItemAvatar sx={{ width: 120, height: 180 }}>
              <Avatar
                src={`src/${book.coverPhotoURL}`}
                alt={book.title}
                sx={{ borderRadius: 2, width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </ListItemAvatar>
            <ListItemText primary={book.title} sx={{ marginLeft: '10px' }} secondary={book.author} />
            <Box
              sx={{ backgroundColor: 'transparent', borderRadius: 1, width: '1rem', height: 'fit' }}
              onClick={() => onAction(book)}
            >
              {isAddMode ? (
                <AddCircleIcon sx={{ color: '#5acccc', cursor: 'pointer' }} />
              ) : (
                <DeleteIcon sx={{ color: '#f76434', cursor: 'pointer' }} />
              )}
            </Box>
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
};

export default BookList;
