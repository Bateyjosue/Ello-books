import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Grid, Tab, Tabs } from '@mui/material';
import SearchBar from './SearchBar';
import BookList from './BookList';
import { GET_BOOKS } from '../data/queries';
import { useQuery } from '@apollo/client';
import Badge from '@mui/material/Badge';

export interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
}

const BookAssignmentView: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [books, setBooks] = useState<Book[]>([]);
  const [originalBooks, setOriginalBooks] = useState<Book[]>([]);
  const [readingList, setReadingList] = useState<Book[]>([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (data && data.books) {
      setBooks(data.books);
      setOriginalBooks(data.books);
    }
  }, [data]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (error) return <p>Error: {error.message}</p>;

  const handleSearch = (searchTerm: string) => {
    if (searchTerm === '') {
      setBooks(originalBooks);
    } else {
      const filteredBooks = originalBooks.filter((book: Book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setBooks(filteredBooks);
    }
  };

  const addBookToReadingList = (book: Book) => {
    setReadingList([...readingList, book]);
  };

  const removeBookFromReadingList = (bookToRemove: Book) => {
    setReadingList(readingList.filter(book => book !== bookToRemove));
  };

  const customTabStyles = {
    padding: '0px 30px',
    marginRight: '20px',

    indicator: {
      backgroundColor: 'f76434',
    },
    "&.Mui-selected": {
      color: '#335c6e',
      backgroundColor: '#28b8b820',
      fontWeight: 'bold',
      borderRadius: 4,
    },
  };

  const badgeStyle = {
    '& .MuiBadge-badge': {
      backgroundColor: 'transparent',
      color: '#f76434',
      paddingLeft: '28px',
      paddingTop: '5px',
      fontWeight: 'bold'
    }
  }

  const uniqueReadingBooks = Array.from(new Set(readingList));

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ sx: { backgroundColor: '#fff' } }}
        >
          <Tab
            label={
              <Badge badgeContent={books.length} color="primary" sx={badgeStyle}>
                All Books
              </Badge>
            }
            {...a11yProps(0)}
            sx={customTabStyles} />
          <Tab
            label={
              <Badge badgeContent={uniqueReadingBooks.length} color="primary" sx={badgeStyle}>
                My Reading
              </Badge>
            }
            {...a11yProps(1)}
            sx={customTabStyles} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid item xs={6}>
          <BookList books={books} onAction={addBookToReadingList} isAddMode={true} readingList={uniqueReadingBooks} />
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid item xs={6}>
          <BookList books={uniqueReadingBooks} onAction={removeBookFromReadingList} isAddMode={false} readingList={uniqueReadingBooks} />
        </Grid>
      </CustomTabPanel>
    </>
  );
};

export default BookAssignmentView;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
