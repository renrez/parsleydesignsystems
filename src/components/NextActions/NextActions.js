import React, {Component} from 'react';
import NextAction from './NextAction/NextAction';
//import ButtonLink from "../ButtonLink/ButtonLink";

class NextActions extends Component {
    render() {

        let assignedClasses = ['next-actions'];

        if( this.props.className) {
            const propClasses = this.props.className.split(' ');
            const mergedClasses = [...assignedClasses, ...propClasses];
            assignedClasses = mergedClasses.join(' ');
        }

        return (
            <div className={assignedClasses}>
                <ul>
                    <NextAction link="mailto:contact@parsleypatterns.com?Subject=Parsley website: Free trial" className="button-link button-primary">Free trial</NextAction>
                    <NextAction link="mailto:contact@parsleypatterns.com?Subject=Parsley website: Contact">Contact us</NextAction>
                </ul>
            </div>
        )
    }
}

export default NextActions;