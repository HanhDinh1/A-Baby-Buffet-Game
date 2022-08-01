import { Link } from "react-router-dom";

// Deconstructing props object directly in the parentheses of the function
function PhraseCard ({ engPhrase, selectedLang, _id }) {
    return(
        <div className="phraseCard card">
            <Link to={`/phrases/${_id}`}>
                <h3>{engPhrase}</h3>
            </Link>
        </div>
    );
}

export default PhraseCard;