export default function Experience({ exps }) {
    let i = 0;
    return (
        <div>
            <h1>EXPERIENCE</h1>
            {exps.map(exp => {
                return (
                    <div key={i++}>
                        <h2>{exp.name} ({exp.from} - {exp.to})</h2>
                        <p>{exp.description}</p>
                    </div>
                )         
            })}
        </div>
    )
}