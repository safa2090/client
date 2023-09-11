import React, {useState} from "react";

const PersonCard = (props) => {
    
    const {firstName, lastName, age, hairColor} = props;
    const [state, setState] = useState({age})
    return (
        <div>
            <h1>
            {firstName}, {lastName}
            </h1>
            <p>Age: {age}</p>
            <p>HairColor: {hairColor}</p>
            <button onClick = {(e) => setState(state + 1)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard;