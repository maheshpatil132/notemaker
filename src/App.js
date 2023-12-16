import React, { useContext, useEffect } from 'react';
import Header from './components/layouts/Header';
import Home from './components/Home/Home';
import Pagination from './components/layouts/Pagination';
import { supabase } from './Database/ConnectDB';
import NotesDB from './context/DataContext';



function App() {
  
  const {setNotes , setLoading} = useContext(NotesDB)
  

  useEffect(() => {
    getCountries();
}, []);

async function getCountries() {
    setLoading(true)
    const { data } = await supabase.from('notes').select('*')
    setLoading(false)
    setNotes(data);
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
