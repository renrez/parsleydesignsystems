import React, {Component} from 'react';

class SectionContainer extends Component {
    render() {

        return (
            <section className={this.props.className} id={this.props.id} tabIndex="-1">
                {this.props.children}
            </section>
        )
    }
}

export default SectionContainer;