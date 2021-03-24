import React, { Component } from "react";

class ToyForm extends Component {
    state = {
        name: "",
        imgURL: "",
    };

    changeInput = (e) => {
        if (e.target.name === "name") {
            this.setState({
                name: e.target.value,
            });
        } else {
            this.setState({
                imgURL: e.target.value,
            });
        }
    };

    handleClick = (e) => {
        e.preventDefault();
        this.props.handleFormSubmit(this.state.name, this.state.imgURL);
        this.setState({
            name: "",
            imgURL: "",
        });
    };

    render() {
        return (
            <div className="container">
                <form className="add-toy-form" onSubmit={this.handleClick}>
                    <h3>Create a toy!</h3>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.changeInput}
                        placeholder="Enter a toy's name..."
                        className="input-text"
                    />
                    <br />
                    <input
                        type="text"
                        name="image"
                        value={this.state.imgURL}
                        onChange={this.changeInput}
                        placeholder="Enter a toy's image URL..."
                        className="input-text"
                    />
                    <br />
                    <input type="submit" name="submit" value="Create New Toy" className="submit" />
                </form>
            </div>
        );
    }
}

export default ToyForm;
