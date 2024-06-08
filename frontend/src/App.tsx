import BookAssignmentView from "./components/BookAssigmentView";
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import Header from "./components/Header";
import { Container } from "@mui/system";

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Container maxWidth="md" sx={{
        py: 10
      }}>
        <BookAssignmentView />
      </Container>
    </ApolloProvider>
  )
}

export default App
