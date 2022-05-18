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
    };

    }


    render() {
        const data = this.state.persons;
        return data.map((person, index) => (
          <div key={index}>
              <h3>S.no- {index}- Name: {person.name}, Age: {person.age}</h3>
          </div>
        ));
      }

}

export default Maps;