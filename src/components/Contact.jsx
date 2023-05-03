import { useState } from "react"

export default function Contact() {
    const [mail, setMail] = useState('alibugraeroglu@gmail.com');
    const [phone, setPhone] = useState('0553 903 2925');
    return (
        <div className="contact">
            <h1>CONTACT</h1>
            <p>{mail}</p>
            <p>{phone}</p>
        </div>
    )
}
