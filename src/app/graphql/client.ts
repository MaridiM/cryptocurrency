import { onError } from '@apollo/client/link/error';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, concat, from } from "@apollo/client";


const uri = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';

const httpLink: HttpLink = new HttpLink({ uri });
const errorLink: ApolloLink = onError(() => {});

const link: ApolloLink = from([
    errorLink,
    httpLink,
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})