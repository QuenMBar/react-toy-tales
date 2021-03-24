import React from "react";
import ToyCard from "./ToyCard";

const ToyContainer = (props) => {
    return (
        <div id="toy-collection">
            {props.toys.map((toy, i) => (
                <ToyCard handleDelete={props.handleDelete} handleLike={props.handleLike} key={i} toyData={toy} />
            ))}
        </div>
    );
};

export default ToyContainer;
