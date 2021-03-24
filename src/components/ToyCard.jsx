import React, { Component } from "react";

class ToyCard extends Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.toyData.name}</h2>
                <img src={this.props.toyData.image} alt={this.props.toyData.name} className="toy-avatar" />
                <p>{this.props.toyData.likes} Likes </p>
                <button className="like-btn" onClick={() => this.props.handleLike(this.props.toyData.id)}>
                    Like {"<3"}
                </button>
                <button className="del-btn" onClick={() => this.props.handleDelete(this.props.toyData.id)}>
                    Donate to GoodWill
                </button>
            </div>
        );
    }
}

export default ToyCard;
