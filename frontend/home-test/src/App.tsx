import BookAssignmentView from "./components/BookAssigmentView";
import { ApolloProvider } from '@apollo/client';
import client from './apollo';

function App() {
  return (
    <ApolloProvider client={client}>
      <BookAssignmentView />
    </ApolloProvider>
  )
}

export default App
