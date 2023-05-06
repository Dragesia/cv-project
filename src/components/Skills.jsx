import { useState } from "react";

export default function Skills({ skills }) {
    let i = 0;

    return (
        <div>
            <h1>SKILLS</h1>
            <ul>
                {skills.map(skill => <li key={i++}>{skill}</li>)}
            </ul>
        </div> 
    )
}