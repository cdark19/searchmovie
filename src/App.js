import React from 'react';
import Details from './page/Detail'
import Home from './page/Home'
import Page404 from './page/Page404'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
     <>
     <Router>
           <Movieroute Details={Details} Home={Home} Page404={Page404}/>
           
     </Router>
     </>
  );
}

function Movieroute(){
   
  return(
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Details/:id" component={Details} />
    <Route  component={Page404} />
 </Switch>
  )
}


export default App;

