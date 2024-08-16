import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SearchResults from './components/Movies/common/SearchResults';
import Contact from './components/Contact';
import Movies from './components/Movies/Movies';
import Movies_Search from './components/Movies/Movies_Search';
import View_Hoc from './components/HOC/View_Hoc';
import All_hooks from './components/All-Hooks/All_hooks';
import Footer from './components/common/Footer';
import MoviesDetails from './components/Movies/Movies_details';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <SpinnerBox /> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/search" component={SearchResults} />
          {/* <Route exact path="/service" component={Services} /> */}
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/movie" component={Movies} />
          {/* <Route path="/products-details/:id" component={Prodcuts_details} /> */}
          <Route path="/movies-details/:id" component={MoviesDetails} />
          <Route path="/search-details/:search" component={Movies_Search} />
          <Route exact path="/hoc" component={View_Hoc} />
          <Route exact path="/hooks" component={All_hooks} />

          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
