export default function Picture({ imgLink }) {
    return (
        <img src={imgLink} alt='Picture' width='100px' height='100px' className="picture" />
    )
}