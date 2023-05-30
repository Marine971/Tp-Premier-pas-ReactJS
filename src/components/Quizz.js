function Quizz() {
const questions = [{question: "Quel est le nom du réalisateur  ?",answer:"Olivier Megaton", level:2},{question: "Quel est le nom de l'actrice principale ?",answer:"Zoe Saldana", level:1},{question: "Quel est le nom du personnage principal ?",answer:"Cataleya Restrepo", level:1},{question: "Quel est le nom du personnage de l'agent du FBI ?",answer:"Ross", level:2},{question: "Quel est le nom du personnage de l'agent de la CIA ?",answer:"James Ross", level:3}]
    // Pour chaque question on affiche la question et un bouton pour afficher la réponse
    return (
        <div className="quizz">
            <h2>Quizz</h2>
            <ul className="questions">
                {questions.map((question) => (
                    <li  key={question.id}>{question.question} <br /> <br /><button onClick={() => alert(question.answer)}>See Answer</button></li>
                ))}
            </ul>
        </div>
    );
}
export default Quizz;