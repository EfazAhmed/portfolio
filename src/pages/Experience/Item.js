import React from "react";
import "./Experience.css";

const Item = ({image, company, role, duration}) => {
    return (
        <div className="ExperienceContainer">
            <img className="ExperienceImage" src={image} />
            <h1 className="ExperienceCompany">{company}</h1>
            <h1 className="ExperienceRole">{role}</h1>
            <h1 className="ExperienceDuration">{duration}</h1>
        </div>
    )
}

export default Item;