import React, { Component } from 'react';
import './App.css';
import SkewedContainer from 'sc-react';

class App extends Component {
    render() { 
        return (
            <div>
                <SkewedContainer bottom="left" bgColor="#ffffff" noMargin>
                    <div className="container">
                        <h1>Skewed Container Example</h1>
                    </div>
                </SkewedContainer>
                <div className="bg-image1">
                    <div className="container">
                        <h2>Content Here</h2>
                    </div>
                </div>
                <SkewedContainer top="left" bottom="left" bgColor="#ffffff" noMargin>
                    <div className="container">
                        <h2>More Content Here</h2>
                    </div>
                </SkewedContainer>
                <div className="bg-image2">
                    <div className="container">
                        <h2>Even More Content Here</h2>
                    </div>
                </div>
                <SkewedContainer top="left" bgColor="#ffffff" noMargin>
                    <div className="container">
                        <h2>This Is The Footer Content</h2>
                    </div>
                </SkewedContainer>
            </div>
        );
    }   
}

export default App;
