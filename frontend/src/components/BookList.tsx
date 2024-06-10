import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import { Book } from './BookAssigmentView';

interface BookListProps {
  books: Book[];
  onAction: (book: Book) => void;
  isAddMode: boolean;
  readingList: Book[];
}

const BookList: React.FC<BookListProps> = ({ books, onAction, isAddMode, readingList }) => {
  return (
    <List sx={{ mx: '-30px'}}>
      {books.map((book, index) => {
        const isInReadingList = readingList.some(readingBook => readingBook.title === book.title);
        return (
          <React.Fragment key={index}>
            <ListItem sx={{
              padding: 2,
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              paddingRight: '30px',
              '&:hover': {
                backgroundColor: '#335c6e10',
                borderRadius: 5,
              }
            }}>
              <ListItemAvatar sx={{ width: 180, height: 120 }}>
                <Avatar
                  src={`src/${book.coverPhotoURL}`}
                  alt={book.title}
                  sx={{ borderRadius: 2, width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </ListItemAvatar>
              <ListItemText primary={book.title} sx={{ marginLeft: '10px', 'span': { fontSize: '1.2em', fontWeight: 'bold' },'h5':{border: '1px solid blue'}  }} secondary={book.author} />
              <Box
                sx={{ backgroundColor: 'transparent', borderRadius: 1, width: '1rem', height: 'fit' }}
              >
                <IconButton 
                  onClick={() => onAction(book)}
                  disabled={isAddMode && isInReadingList}
                  sx={{ color: isAddMode ? '#5acccc' : '#f76434', cursor: 'pointer'}}
                >
                  {isAddMode ? <AddCircleIcon /> : <DeleteIcon />}
                </IconButton>
              </Box>
            </ListItem>
          </React.Fragment>
        )
      })}
    </List>
  );
};

export default BookList;
