import React, { useContext, useEffect, useState } from 'react';
import Header from './components/layouts/Header';
import Home from './components/Home/Home';
import { supabase } from './Database/ConnectDB';
import NotesDB from './context/DataContext';
import Footer from './components/layouts/Footer';



function App() {

  const { setNotes, setLoading , notes} = useContext(NotesDB)


  useEffect(() => {

    getCountries();

  }, []);


  function filterOutCommonObjects(array1, array2, key) {
    const filteredArray = array1.filter(obj1 => {if (array2 && Array.isArray(array2)) {
      return !array2.some(obj2 => obj2[key] === obj1[key]);
    }
    return true}); 
    return filteredArray;
  }

  async function getCountries() {

    let items = JSON.parse(localStorage.getItem('PinedNotes'))
    setLoading(true)
    const { data } = await supabase.from('notes')
      .select('*')
      .order('inserted_at', { ascending: true })

    setLoading(false)
    
    const resultArray = filterOutCommonObjects(data, items, 'id');
    setNotes(resultArray);
    console.log(notes);
  }

  return (
    <div className="App">

      <Header />
      <Home />
      <Footer/>

      
    </div>
  );
}

export default App;
