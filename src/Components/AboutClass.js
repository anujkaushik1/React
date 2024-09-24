
import React from "react";
import AboutChild from "./AboutChild";
class AboutClass extends React.Component{

    constructor(props){
        console.log('constrc');
        
        super(props);
        this.state = {
            count:2,
            lastName: "kaushik state"
        }

        
        
    }

    componentDidMount(){
        console.log('did');
        
    }

    componentDidUpdate(){
        
    }

    componentWillUnmount(){
        console.log('unmounted');
        
    }

    render(){
        console.log('render22222222222');

        const {name} = this.props;
        const {count} = this.state;
        
        return (
            <div>
                <h1>HEllo world: {name}</h1>
                <h2>count: {count}</h2>
                <button onClick = {() => this.setState({count: 10})}></button>
            </div>
        )
    }

}

export default AboutClass;