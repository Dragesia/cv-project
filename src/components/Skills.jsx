import { useState } from "react";

export default function Skills({ skills }) {
    let i = 0;

    return (
        <div className="skills">
            <h1>Skills</h1>
            <ul>
                {skills.map(skill => <li key={i++}>{skill}</li>)}
            </ul>
        </div> 
    )
}