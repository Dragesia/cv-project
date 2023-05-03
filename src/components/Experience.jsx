import { useState } from "react";

export default function Experience() {
    const exampleExps = [
        {
            name: 'Antik Kapi',
            from: '2015',
            to: 'Today',
            description: 'Best job ever'
        },
        {
            name: 'Adabahce',
            from: '2013',
            to: '2015',
            description: 'Not best job ever'
        }
    ]

    const [exps, setExps] = useState(exampleExps);

    return (
        <div>
            <h1>EXPERIENCE</h1>
            {exps.map(exp => {
                return (
                    <>
                        <h2>{exp.name} ({exp.from} - {exp.to})</h2>
                        <p>{exp.description}</p>
                    </>
                )         
            })}
        </div>
    )
}