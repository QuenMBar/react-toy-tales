import React from "react";
import "./App.css";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";

class App extends React.Component {
    state = {
        display: false,
        toys: [],
    };

    componentDidMount() {
        fetch("http://localhost:3000/toys")
            .then((res) => res.json())
            .then((toys) => {
                this.setState({ toys });
            });
    }

    handleClick = () => {
        let newBoolean = !this.state.display;
        this.setState({
            display: newBoolean,
        });
    };

    handleLike = (id) => {
        let indOfElem = this.state.toys.findIndex((toy) => toy.id === id);
        let data = { likes: this.state.toys[indOfElem].likes + 1 };
        fetch(`http://localhost:3000/toys/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((newToy) => {
                this.setState({
                    toys: [...this.state.toys.slice(0, indOfElem), newToy, ...this.state.toys.slice(indOfElem + 1)],
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    handleFormSubmit = (newName, newImg) => {
        if (newName.length !== 0 && newImg.length !== 0) {
            let data = {
                name: newName,
                image: newImg,
                likes: 0,
            };
            fetch(`http://localhost:3000/toys`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((newToy) => {
                    this.setState({
                        toys: [...this.state.toys, newToy],
                    });
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    };

    handleDelete = (id) => {
        let indOfElem = this.state.toys.findIndex((toy) => toy.id === id);
        fetch(`http://localhost:3000/toys/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((newToy) => {
                this.setState({
                    toys: [...this.state.toys.slice(0, indOfElem), ...this.state.toys.slice(indOfElem + 1)],
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    render() {
        return (
            <>
                <Header />
                {this.state.display ? <ToyForm handleFormSubmit={this.handleFormSubmit} /> : null}
                <div className="buttonContainer">
                    <button onClick={this.handleClick}> Add a Toy </button>
                </div>
                <ToyContainer handleDelete={this.handleDelete} handleLike={this.handleLike} toys={this.state.toys} />
            </>
        );
    }
}

export default App;
