import React from 'react';
import { Button, IconButton, Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import TwitterIcon from '../assets/icons/TwitterIcon';
import FacebookIcon from '../assets/icons/FacebookIcon';
import InstagramIcon from '../assets/icons/InstagramIcon';
import LinkIcon from '../assets/icons/LinkIcon';
import MailOpenIcon from '../assets/icons/MailOpenIcon';
import PinIcon from '../assets/icons/PinIcon';
import Logo from '../assets/icons/Logo';

const NavLink = styled('a')({
  fontSize: '1rem',
  color: '#000',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const MainContainer = styled(Container)({
  textAlign: 'center',
  padding: '48px 30px',
  lineHeight: 5
});

const ReadingElephant = styled('img')({
  height: '192px',
});

const ExploreButton = styled(Button)({
  backgroundColor: '#5acccc',
  fontWeight: 'bold',
  color: '#fff',
  padding: '12px 32px',
  borderRadius: '24px',
  '&:hover': {
    backgroundColor: '#f76434',
  },
});

const Header: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{
      lineHeight: '50px',
      height: '100vh',
      mb: 20,
    }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" py={3}>
        <Box display="flex" alignItems="center" gap={2}>
          <Logo/>
        </Box>
        <Box display="flex" gap={4}>
          <NavLink href="#">Discover Ello</NavLink>
          <NavLink href="#">Parent Resources</NavLink>
        </Box>
      </Box>
      <MainContainer >
        <ReadingElephant src="./src/assets/hero.png" alt="Reading Elephant" />
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom sx={{
            fontSize: {
              xs: '3rem', // smaller font size for mobile devices
              sm: '3rem', // medium font size for tablets
              md: '4rem', // larger font size for desktops
              lg: '5rem', // largest font size for larger screens
            },
          }}>
          Confident, Independent Reading
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Over 700 decodable books that match your child's reading ability. Help prevent the summer slump, without frustration.
        </Typography>
        <ExploreButton>EXPLORE READING SETS</ExploreButton>
        <Typography variant="h6" component="p" marginTop={4}>
          Share this library with friends!
        </Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          <IconButton aria-label="mail">
            <MailOpenIcon />
          </IconButton>
          <IconButton aria-label="instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="pin">
            <PinIcon />
          </IconButton>
          <IconButton aria-label="link">
            <LinkIcon />
          </IconButton>
        </Box>
      </MainContainer>
    </Container>
  );
};

export default Header;
