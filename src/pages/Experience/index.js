import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { experiences } from './fixtures';
import './Experience.css'

const Experience = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
        { width: 1920, itemsToShow: 5 },
    ]

    return (
        <div id="experience">
            <h1 className="experience-title">Experience</h1>
            <Carousel
                style={{ padding: 50, paddingTop: 100 }}
                breakPoints={breakPoints}
                focusOnSelect={true}
                pagination={false}
            >
                {experiences.map((exp) => {
                    return (
                        <Item
                            image={exp.image}
                            company={exp.company}
                            role={exp.role}
                            duration={exp.duration}
                        />
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Experience;