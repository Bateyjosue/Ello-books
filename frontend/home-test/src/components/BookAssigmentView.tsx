import React, { useState } from 'react';
import { Box,  Grid,  Tab, Tabs } from '@mui/material';
import SearchBar from './SearchBar';
import BookList from './BookList';
import ReadingList from './ReadingList';
import { GET_BOOKS } from '../data/queries';
import { useQuery } from '@apollo/client';

interface Book {
  title: string;
  author: string;
}

const BookAssignmentView: React.FC = () => {
  const { loading, error, data = []} = useQuery(GET_BOOKS)
  const [books, setBooks] = useState<{ title: string; author: string }[]>(data.books|| []);
  const [readingList, setReadingList] = useState<{ title: string; author: string }[]>([]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSearch = (searchTerm: string) => {
    
    const filteredBooks = books.filter((book: Book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  const addBookToReadingList = (book: { title: string; author: string }) => {
    setReadingList([...readingList, book]);
  };

  const removeBookFromReadingList = (bookToRemove: { title: string; author: string }) => {
    setReadingList(readingList.filter(book => book !== bookToRemove));
  };

  return (

    /********************************************/
    <>
      <SearchBar onSearch={handleSearch} />
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={`Books List/count: ${books.length}`} {...a11yProps(0)} />
          <Tab label={`Reading List/Count: ${readingList.length}`} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid item xs={6}>
          <BookList books={books} onAdd={addBookToReadingList} />
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid item xs={6}>
          <ReadingList books={readingList} onRemove={removeBookFromReadingList} />
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