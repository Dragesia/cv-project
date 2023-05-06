export default function Education({ educations }) {
    let i = 0;
    return (
        <div>
            <h1>EDUCATION</h1>
            <div className="educations">
                {
                    educations.map(education => {
                        return (
                            <div className="education" key={i++}>
                                <h2>{education.name}</h2>
                                <h4>{education.type}</h4>
                                <h4>({education.from} - {education.to})</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}