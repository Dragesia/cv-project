export default function Experience({ exps }) {
    let i = 0;
    return (
        <div className="experience">
            <h1>Experience</h1>
            {exps.map(exp => {
                return (
                    <div key={i++}>
                        <h3>{exp.from} - {exp.to}</h3>
                        <h2>{exp.name}</h2>
                        <p>{exp.description}</p>
                    </div>
                )         
            })}
        </div>
    )
}