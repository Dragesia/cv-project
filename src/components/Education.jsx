import { useState } from "react"

export default function Education() {
    const exampleEducation = [
        {
            name: 'Sirripasa Ilkogretim Okulu',
            type: 'Ilkokul',
            from: '2009',
            to: '2013'
        },
        {
            name: 'Sirripasa Ortaokulu',
            type: 'Ortaokul',
            from: '2013',
            to: '2017'
        },
        {
            name: 'Merkez Bankasi Derince Anadolu Lisesi',
            type: 'Lise',
            from: '2017',
            to: '2021'
        },
        {
            name: 'Sakarya Universitesi',
            type: 'Lisans',
            from: '2021',
            to: 'Today'
        }
    ]

    const [educations, setEducations] = useState(exampleEducation);
    return (
        <div>
            <h1>EDUCATION</h1>
            <div className="educations">
                {
                    educations.map(education => {
                        return (
                            <div className="education">
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