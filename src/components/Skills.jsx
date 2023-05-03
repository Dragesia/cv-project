import { useState } from "react";

export default function Skills() {
    const exampleSkills = [
        'Cocksucker',
        'Distraction',
        'Dickrider',
        'Huge asshole'
    ];
    let i = 0;
    
    const [skills, setSkills] = useState(exampleSkills);

    return (
        <div>
            <h1>SKILLS</h1>
            <ul>
                {skills.map(skill => <li key={i++}>{skill}</li>)}
            </ul>
        </div> 
    )
}