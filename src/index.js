import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './components/Spinner';

class App extends React.Component {
    // // good place to do one-time setup
    // constructor(props) {
    //     super(props);
    //     // the ONLY time we will do direct assignment to state is upon initialisation
    //     this.state = { lat: null, errorMessage: '' };
    // }
    // the line below is completely equivalent to the above code block
    // babel transpiles it into what is written above
    state = { lat: null, errorMessage: '' };
    // called exactly one time when the component first renders on screen
    // -- commonly used for set up and initial state
    // -- good place to do data-loading (most people reccomend not doing this in the constructor)
    //    mostly for readability reasons, better to centralise all initial state here
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // success callback
            position => {
                // the render() function is called every time the state changes
                // all child components that depend on the state will also be re-rendered
                this.setState({ lat: position.coords.latitude });
                // notice how we did not do
                // this.state.lat = position.coords.latitude;
            },
            // error callback
            err => {
                // this is an additative process - the other state variables remain unchanged
                this.setState({ errorMessage: err.message });
                console.log(err);
            }
        );
        console.log('My component was rendered to the screen');
    }
    // called every time the components re-renders
    // -- good place for more data-loading when state/props change.
    componentDidUpdate() {
        console.log('My component was updated and re-rendered to the screen');
    }
    // -- good place for cleanup (often for non-react stuff)
    componentWillUnmount() {
        console.log('My component was removed from the screen');
    }

    // there are 3 other lifecycle methods, but they are rarely used.
    renderContent() {
        // conditional rendering.
        if (this.state.errorMesage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>;
        }
        if (!this.state.errorMesage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        // don't need to check state here, as if the first two checks fail, then
        // this is the only possible state remaining.
        return <Spinner message="Please accept location request..." />;
    }
    // every component must define render
    // only return JSX here
    // we try to avoid more than one return statement in the render() method so that global styles can be applied.
    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
