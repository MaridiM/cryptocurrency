import { App } from 'app';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from 'app/graphql';

import './app/styles/globals.css'

const root = document.getElementById('root');

if (!root) {
    throw new Error('Root not found');
}

const container = createRoot(root);

container.render(
    <ApolloProvider client={client}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>
);
