import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/layouts/layout';
import Characters from '@/routes/characters';
import Quotes from '@/routes/quotes';
import Details from '@/routes/details';

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Characters />} />
            <Route path="/details" element={<Details />} />
            <Route path="/quotes" element={<Quotes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
