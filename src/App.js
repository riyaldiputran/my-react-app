
import './Styles.css'
import { BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import HomePage from './pages/Home';
import TrendingPage from './pages/trendingPage';

export default function App() {





  return (
    <Router>
        <Switch>
            <Redirect exact from="/" to="home" />
            <Route path="/trending">
                <TrendingPage/>
            </Route>
            <Route path="/home">
                <HomePage/>
            </Route>
        </Switch>
    </Router>
  )
}
