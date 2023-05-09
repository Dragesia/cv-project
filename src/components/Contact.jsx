export default function Contact({ mail, phone }) {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <div className="mail-cont">
                <h6>Email</h6>
                <p>{mail}</p>
            </div>
            <div className="phone-cont">
                <h6>Phone</h6>
                <p>{phone}</p>
            </div>
        </div>
    )
}
