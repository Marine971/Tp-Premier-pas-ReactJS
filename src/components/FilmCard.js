import logo from '../assets/img.png'
import Actors from './Actors'

function FilmCard() {
    const synopsis = "Témoin du meurtre de ses parents survenu lorsqu'elle était enfant, une jeune femme, devenue tueuse professionnelle, entreprend de se venger du gangster responsable de ce massacre."
    const actors = [{name : "Zoe Saldana", id : 1, role:"Cataleya Restrepo"}, {name : "Amandla Stenberg", id : 2, role: "10 years old Cataleya"},{name : "Michael Vartan", id : 3, role: "Danny Delaney"},{name : "Cliff Curtis", id : 4, role: "Emilio"},{name : "Graham McTavish ", id : 5, role: "Head Marshall"}]
    const critics = [{name : "Le Monde", id : 1, note: 4}, {name : "Le Figaro", id : 2, note: 3},{name : "Le Parisien", id : 3, note: 5},{name : "Le Point", id : 4, note: 2},{name : "L'Express", id : 5, note: 1}]
    return (
        <div className="film-card">
            <img src={logo} className="img_logo"/>
            <h2>Columbiana</h2>
            <small>Release Date: 2011 by Olivier Megaton
            </small>
            <p>{synopsis}</p>
            <Actors actors={actors} />
            <h3>Critics</h3>
            <ul className="critics">
                {critics.map((critic) => (
                    <li  key={critic.id}>{critic.name} <br /> {[...Array(critic.note)].map((n, i) => (
                        <span key={i}>⭐</span>
                    ))}</li>
                ))}
            </ul>
        </div>
    );
}
export default FilmCard;