function Actors ({ actors }) {
    console.log(actors)
    return (
        <div>
            <h3>Actors</h3>
            <ul className="actors">
                {actors.map((actor) => (
                    <li  key={actor.id}>{actor.name} <br /> Role: {actor.role}</li>
                ))}
            </ul>
        </div>
    )
}
export default Actors;
