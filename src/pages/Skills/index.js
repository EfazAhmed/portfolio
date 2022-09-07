import React from 'react';
import './Skills.css';
import { skills } from './fixtures';

const Skills = () => {
  return (
    <div id="skills">
        <h1 className="skills-title">Skills</h1>
        <div className='skills-container'>
            {skills.map((s) => {
                return (
                    <div>
                        <img className='skill-image' src={s.image} />
                        <h1 className='skill-name'>{s.skill}</h1>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills;