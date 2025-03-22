import React from 'react';
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import Users from './components/Users';

const queryClient=new QueryClient();
const App = () => (
  
<QueryClientProvider client={queryClient}>
  <Users/>
</QueryClientProvider>

);
export default App;
