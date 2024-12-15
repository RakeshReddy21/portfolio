import React, {Component} from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            todo: "",
            list:[],
        }
    }
    handleChange = (e) => {
        this.setState({todo: e.target.value})

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({list:[this.state.todo]})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todo" id="todo" onChange={this.handleChange}/>
                    <button type="submit">Add Todo</button>
                </form>
                <h1>{this.state.list}</h1>
            </div>
        )
    }
}

export default Todo