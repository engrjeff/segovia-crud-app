import "./styles/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContextProvider from "./context/UserContext";

import Home from "./views/Home";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import PageNav from "./components/page/PageNav";
import PageContent from "./components/page/PageContent";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <Router>
          <PageNav />
          <PageContent>
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/user/:id'>
                <UserDetails />
              </Route>
              <Route path='/users'>
                <Users />
              </Route>

              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </PageContent>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
