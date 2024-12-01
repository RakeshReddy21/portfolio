// import React, { Component } from "react";

// class Counter extends Component{
//     constructor(){
//         super();
//         this.state = {Counter : 0, color :"red"}
//     }
//     render(){
//         const updation = ()=>{
//             this.setState({Counter : this.state.Counter + 1, color:"blue"})
            
//         }
//         const decrement = ()=>{
//             this.setState({Counter : this.state.Counter - 1, color:"orange"})
//         }
//         const updation2 = ()=>{
//             this.setState({Counter : this.state.Counter + 2, color:"aqua"})
//         }
//         const updation5 = ()=>{
//             this.setState({Counter : this.state.Counter + 5, color:"green"})
//         }
//         const decrement2 = ()=>{
//             this.setState({Counter : this.state.Counter - 2, color:"pink"})
//         }
//         const decrement5 = ()=>{
//             this.setState({Counter : this.state.Counter - 5, color:"pink"})
//         }

//         return(
//             <div>
//                 <div>
                    
//                     <button onClick={updation}>Increase 1 time</button>
//                     <button onClick={updation2}>Increase 2 times</button>
//                     <button onClick={updation5}>Increase 5 times</button>
//                     <h1>Counter: {this.state.Counter}</h1>
//                     <button onClick={decrement}>Decrease 1 time</button>
//                     <button onClick={decrement2}>Decrease 2 times</button>
//                     <button onClick={decrement5}>Decrease 5 times</button>



//                 </div>
//             </div>
//         )
//     }
// }

// export default Counter


import React, { Component } from "react";

class Toggle extends Component {
//   constructor() {
//     super();
//     this.state = { 
//       isOn: false, 
//       btnText: "Switch off", 
//       normalText: "Turned off",
//       color: "red"
//     };
//   }

//   handleToggle = () => {
//     this.setState((prevState) => ({
//       isOn: !prevState.isOn,
//       btnText: prevState.isOn ? "Switch off" : "Switch on",
//       normalText: prevState.isOn ? "Turned off" : "Turned on",
//       color: prevState.isOn ? "red" : "green"
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleToggle}>{this.state.btnText}</button>
//         <h1>{this.state.normalText}</h1>
//       </div>
//     );
//   }


}

export default Toggle;


