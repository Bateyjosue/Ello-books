import React from 'react';
import { List, ListItem, ListItemText, Button, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { Book } from './BookAssigmentView';
import DeleteIcon from '@mui/icons-material/Delete';

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
            <ListItemAvatar sx={{ width: 120, height: 180 }}>
              <Avatar
                src={`src/${book.coverPhotoURL}`}
                alt={book.title}
                sx={{ borderRadius: 2, width: '100%', height: '100%' }}
              />
            </ListItemAvatar>
            <ListItemText primary={book.title} sx={{marginLeft: '10px'}} secondary={book.author} />
            <Button
              variant="contained"
              sx={{ backgroundColor: '#f76434', borderRadius:10, width: '32px', height: '32px'}}
              onClick={() => onRemove(book)}
            >
              <DeleteIcon/>
            </Button>
          </ListItem>
          {index < books.length - 1 && <Divider />} {/* Add a divider after each item except the last one */}
        </React.Fragment>
      ))}
    </List>
  );
};

export default ReadingList;
