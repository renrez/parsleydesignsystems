import React, {Component} from 'react';

class SectionContainer extends Component {
    render() {

        return (
            <div className={this.props.className} id={this.props.id} tabIndex="-1">
                {this.props.children}
            </div>
        )
    }
}

export default SectionContainer;