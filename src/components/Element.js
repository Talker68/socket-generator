import React from 'react';

export default class Element extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            newStateClass: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        let newStateClass = '';
        if (this.props.element < nextProps.element) {
            newStateClass = '_more';
        } else if (this.props.element > nextProps.element) {
            newStateClass = '_less';
        }

        this.setState({
            newStateClass
        })
    }

    render() {
        let classNames = ['data-element', this.state.newStateClass].join(' ');
        return <span className={classNames}>{this.props.element}</span>;
    }
}
