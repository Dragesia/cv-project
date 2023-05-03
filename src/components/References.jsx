import { useState } from "react"

export default function References() {
    const exampleRefs = [
        {
            name: 'Burak Koc',
            description: 'Ondan nasil lol oynamayacagimi ogrendim'
        },
        {
            name: 'Eray Ozkan',
            description: 'Tam bir o cocugudur kendisi'
        }
    ]

    const [refs, setRefs] = useState(exampleRefs);

    return (
        <div>
            <h1>REFERENCES</h1>
            <div className="refs">
                {
                    refs.map(ref => {
                        return (
                            <div className="ref">
                                <h2>{ref.name}</h2>
                                <p>{ref.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}