import { Component } from "react";

export default class ComponentName extends Component {
    constructor() {
        super();

        this.state = {
            count : 0
          };   
        
        this.handleToggleClick = this.handleToggleClick.bind(this);
        }

    componentMethodOne() {
        //JS code
    }

    componentMethodTwo() {
        // JS code
    }

    render() {
        return(
            <div className="App">
                <h1>Component Heading</h1>
            </div>
        );
    }
}
