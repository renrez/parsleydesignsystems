import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import DesignSystem from './containers/DesignSystem/DesignSystem';


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/design-system" exact component={DesignSystem} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
