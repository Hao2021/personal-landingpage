import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 
// Elements import Here 

import PersonalPortfolio from './pages/PersonalPortfolio';
import Contact from "./elements/contact/Contact";


// Import Css Here 
import './assets/scss/style.scss';


const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={PersonalPortfolio}/>
                
                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`} exact component={Contact}/>


                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
