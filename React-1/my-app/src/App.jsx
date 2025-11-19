import React, { Component } from 'react';

// Question 1 Component
class WelcomeBanner extends Component {
    render() {
        return (
            <h2>Welcome to the React Class! Let's learn something new today.</h2>
        );
    }
}

// Question 2 Component
class ThankYouMessage extends Component {
    render() {
        return (
            <h2>Thank you for attending today's session!</h2>
        );
    }
}

// Question 3 Component
class UserDetails extends Component {

    getWelcomeMessage() {
        return "Welcome to the session!";
    }

    render() {
        return (
            <div>
                <h2>Hello, User!</h2>
                <p>{this.getWelcomeMessage()}</p>
            </div>
        );
    }
}

// Question 4 Component
class Greeting extends Component {

    sayHello() {
        return "Hello, welcome to React!";
    }

    sayGoodbye() {
        return "Goodbye, see you soon!";
    }

    render() {
        return (
            <div>
                <p>{this.sayHello()}</p>
                <p>{this.sayGoodbye()}</p>
            </div>
        );
    }
}

// Rendering all components together
class App extends Component {
    render() {
        return (
            <div>
                <WelcomeBanner />
                <ThankYouMessage />
                <UserDetails />
                <Greeting />
            </div>
        );
    }
}

export default App;
