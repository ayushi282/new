import  React, { Component } from 'react';

class Person extends Component{

    constructor(props){
super(props)
this.props=props;
    }
    render ()
    {
       return ( 
       <div>
            <h3>ayushi{this.props.name}</h3>        </div>
        );
    }
}

export default Person 