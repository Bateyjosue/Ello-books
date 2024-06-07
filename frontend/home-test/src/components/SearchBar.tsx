import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '50px',
      padding: '10px',
      margin: '10px',
    }}>
      <TextField
        label="Search Books"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" style={{backgroundColor: '#5acccc',borderRadius:'20px', marginLeft: '10px'}} onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
