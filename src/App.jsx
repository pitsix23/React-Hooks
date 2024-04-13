import React from 'react';
import Semaphor from './hooks/semaforo';
import ListaTareas from './hooks/ListaTareas';
import Counter from './hooks/Counter';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Footer from './components/footer';


const App = () => {
  return (
    <div>
      <Semaphor />
      <ListaTareas />
      <Counter />
      <Navbar />
      <Jumbotron />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
