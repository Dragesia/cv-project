import { useState } from "react"

export default function Profile() {
    const [description, setDescription] = useState('I work at worlds biggest restaurant, ANTIKKAPI');
    return (
        <div className="profile">
            <h1>PROFILE</h1>
            <p>{description}</p>
        </div>
    )
}