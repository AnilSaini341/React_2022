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

    removeHandler = (personIndex)=>{
        //alert(copyIndex);
        const copyPersons= this.state.persons;
        //console.log(copyPersons);
        //console.log(copyPersons[personIndex]);
        copyPersons.splice(personIndex,1);  //Remove data with indexing and what data to remove
       // console.log(copyPersons);
       this.setState({persons:copyPersons});

    }

    render() {
        let persons;
        if(this.state.isShow){
            persons=this.state.persons.map((person, index) =>{
                return(
                    <h3 key={index}>S.No:- {index} | {person.name}, Age:{person.age} <button onClick={()=>this.removeHandler(index)}>Remove</button></h3>
                )
            });
        }
        else{
            persons ="";
        }
        
        //console.log(this.state.isShow);
        return (
        <>
        <button onClick={this.toggleHandler}>Toggle List</button>
        { persons }</>)
      }

}

export default Maps;