import React, {Component} from 'react';
import Container from '../Container/Container';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


class Layout extends Component {

    render() {
        return (
            <Container>
                <Header />
                <main id="main" tabIndex="-1" className="stack stack-large">
                    {this.props.children}
                </main>
                <Footer />
            </Container>
        )
    }
}

export default Layout;