import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import '../../App.css';
import NavBar from '../../components/navbar/Navbar.js'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer.js'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.js'

function Home({name}) {
    return (
        <Router>
          <NavBar logo={'../../TECNO-HOGAR.png'}></NavBar>
          
         
          <Switch>
            <Route path="/item/:id">
              <ItemDetailContainer></ItemDetailContainer>
            </Route>
            <Route exact path="/">
              <div className="App">
              {/* <h1>Hola bienvenidos a {name}</h1> */}
                <div className="App__counter">
                  <ItemListContainer />
                </div>
              </div>
           
            </Route>
            <Route path="*">
              La página que buscar no existe
              </Route>
          </Switch>
        </Router>
      );
}

export default Home













