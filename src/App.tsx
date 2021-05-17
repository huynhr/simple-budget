import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Expenses from './Pages/Expense';

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <Expenses />
    </ChakraProvider>
  );
}

export default App;
