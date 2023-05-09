export default function Education({ educations }) {
    let i = 0;
    return (
        <div className="educations">
            <h1>Education</h1>
            <div className="educations-cont">
                {
                    educations.map(education => {
                        return (
                            <div className="education" key={i++}>
                                <h2 className="year">{education.year}</h2>
                                <h4 className="type">{education.type}</h4>
                                <h4 className="name">{education.name}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}