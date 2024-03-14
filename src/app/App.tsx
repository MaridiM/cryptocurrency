import { Suspense } from 'react';
import { PageLayout } from './ui';

import './styles/globals.css'

const App = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageLayout />
        </Suspense>
    );
};

export default App;
