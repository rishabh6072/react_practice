import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    // componentDidCatch will be executed whenever a component
    // we wrap with the error boundary throws an error,
    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error })
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children
            // Genius!! What an error free app.
        }
    }
}


export default ErrorBoundary;