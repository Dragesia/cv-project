export default function References({ refs }) {
    let i = 0;
    return (
        <div>
            <h1>REFERENCES</h1>
            <div className="refs">
                {
                    refs.map(ref => {
                        return (
                            <div className="ref" key={i++}>
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