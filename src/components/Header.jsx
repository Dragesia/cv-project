export default function Header({ name, job }) {
    return (
        <div className="header">
            <p>{name}</p>
            <h3>{job}</h3>
        </div>
    )
}