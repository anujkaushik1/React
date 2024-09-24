
import React from "react";
class AboutChild extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:2,
            lastName: "kaushik state"
        }

        console.log('constucrr aboutchild called', this.props.name);
        
        
    }

    componentDidMount(){
        console.log('did aboutchild callled', this.props.name);
        this.setState({name : 'hahjajhj'})

        
    }

    componentDidUpdate(){
        console.log('didupdate aboutchild callled', this.props.name);

        
    }

    render(){
        console.log('reneder aboutchild called', this.props.name);

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

export default AboutChild;