import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI_API,
  cache: new InMemoryCache()
});


export default client;