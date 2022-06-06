//using froms
import React, { Component } from 'react';

class FormData extends React.Component{
    constructor(props){
        super(props);
        this.state={value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChnage(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(){
        console.log(this.state.value);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <lable>
                        Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    </lable>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }

}

export default FormData;