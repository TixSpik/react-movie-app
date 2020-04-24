import React from 'react';
import { Layout } from 'antd'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MenuTop from './componets/MenuTop/MenuTop';

//Pages
import Home from './pages/Home';
import Movie from './pages/Movie/Movie';
import PopularMovies from './pages/PopularMovies';
import SearchMovies from './pages/Search/SearchMovies';
import Error404 from './pages/Error404';
import NewMovies from './pages/NewMovies';


function App() {
  const { Header, Content } = Layout

  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>

        <Content>
          <Switch>
            <Route path='/' exact={true} >
              <Home />
            </Route>
            <Route path='/new-movies' exact={true} >
              <NewMovies />
            </Route>
            <Route path='/popular-movies' exact={true} >
              <PopularMovies />
            </Route>
            <Route path='/search' exact={true} >
              <SearchMovies />
            </Route>
            <Route path='/movie/:id' exact={true} >
              <Movie />
            </Route>
            <Route path='*'>
              <Error404 />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
