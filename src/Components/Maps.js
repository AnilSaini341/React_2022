import React,{ Component } from "react";

class Maps extends Component{
    constructor(props){
    super(props);
    this.props = props;
    this.state={
        persons:[
            {
                name: "Ashok",
                age:"30"
            },
            {
                name: "Amit",
                age:"31"
            },
            {
                name: "Aman",
                age:"32"
            },
            {
                name: "Ajay",
                age:"45"
            },
            {
                name: "Shiv Singh",
                age:"32"
            },
        ],
        isShow: true,
    };

    this.toggleHandler= this.toggleHandler.bind(this); //Binding Event Method

    }
    toggleHandler(){
        //alert("hi");
        this.setState({isShow:!this.state.isShow});
    }

    render() {
        let persons;
        persons=this.state.persons.map((person, index) =>{
            return(
            
                <h3 key={index}>S.No:- {index} | {person.name}, Age:{person.age}</h3>
            
            )
        });
        //console.log(this.state.isShow);
        return (
        <>
        <button onClick={this.toggleHandler}>Toggle List</button>
        { this.state.isShow === true ? persons : ""}</>)
      }

}

export default Maps;