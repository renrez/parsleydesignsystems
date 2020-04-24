import React, {Component} from 'react';

class ButtonLink extends Component {
    render() {

    let assignedClasses = ['button-link'];

    if( this.props.className) {
        const propClasses = this.props.className.split(' ');
        const mergedClasses = [...assignedClasses, ...propClasses];
        assignedClasses = mergedClasses.join(' ');
    }

        return (
            <a href={this.props.link} className={assignedClasses}>{this.props.children}</a>
        );
    }
};

export default ButtonLink;