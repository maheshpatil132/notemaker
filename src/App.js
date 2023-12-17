import React, { useContext, useEffect } from 'react';
import Header from './components/layouts/Header';
import Home from './components/Home/Home';
import { supabase } from './Database/ConnectDB';
import NotesDB from './context/DataContext';



function App() {
  
  const {setNotes , setLoading } = useContext(NotesDB)
  

  useEffect(() => {
    getCountries();
}, []);

async function getCountries() {
   
    let items = JSON.parse(localStorage.getItem('PinedNotes'))
    setLoading(true)
    const { data } = await supabase.from('notes')
                                    .select('*')
                                    .order('inserted_at', { ascending: true })
                                    
    setLoading(false)
    setNotes(data);
      
}
  
  return (
    <div className="App">

      <Header/>
      <Home/>
    </div>
  );
}

export default App;
