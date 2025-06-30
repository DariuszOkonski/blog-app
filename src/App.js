import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import React from 'react';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/add' element={<AddPost />} />
        <Route path='/post/edit/:id' element={<EditPost />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
