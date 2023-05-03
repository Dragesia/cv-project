import { useState } from "react"

export default function Header() {
    const [name, setName] = useState('Ali Bugra');
    const [job, setJob] = useState('Chef');
    return (
        <div className="header">
            <h1>{name}</h1>
            <h3>{job}</h3>
        </div>
    )
}