//Import route and our compnents
import {Route, Switch} from 'react-router-dom'; //switch is if/else statement used below
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
        <Route
          path="/price/:symbol"
          render={(routerProps) => <Price {...routerProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;

//render the price compenent and pass it to router props
//returning the <Price component with router props passed
//it atomatically passes the prop to whatever i named the components
//whatever function i passed in, the param will automatically be spread into Price becaseu
//we will use the routerProps in Price component later
