import React, { useEffect, useState } from 'react';
import Header from './components/layouts/Header';
import Home from './components/Home/Home';
import Pagination from './components/layouts/Pagination';
import { supabase } from './Database/ConnectDB';



function App() {
  const [countries, setCountries] = useState([]);
  

  useEffect(() => {
    getCountries();
}, []);

async function getCountries() {

    const { data} = await supabase.from('notes').select('*')
    setCountries(data);
    console.log(data);
}
  
  return (
    <div className="App">

      <Header/>
      <Home/>
      <Pagination/>
    </div>
  );
}

export default App;
