import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Book } from './BookAssigmentView';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';

interface ReadingListProps {
  books: Book[];
  onRemove: (book: Book) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({ books, onRemove }) => {
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
            <ListItemText primary={book.title} sx={{marginLeft: '10px'}} secondary={book.author} />
            <Box
              sx={
                {
                  backgroundColor: 'transparent',
                  borderRadius: 1,
                  width: '1rem',
                  height: 'fit',
                }
              }
              onClick={() => onRemove(book)}
            >
              <DeleteIcon sx={{  color: '#f76434', cursor: 'pointer'}}/>
            </Box>
          </ListItem>
          {/* {index < books.length - 1 && <Divider />} Add a divider after each item except the last one */}
        </React.Fragment>
      ))}
    </List>
  );
};

export default ReadingList;
