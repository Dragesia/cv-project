export default function Header({ name, job }) {
    return (
        <div className="header">
            <h1>{name}</h1>
            <h3>{job}</h3>
        </div>
    )
}