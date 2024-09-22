
import React from "react";
class AboutClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:2,
            lastName: "kaushik state"
        }
        
    }

    render(){
        const {name} = this.props;
        const {count} = this.state;
        console.log(this.state);
        
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