import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function TranslatedPhrasesPage (props) {
  const [phrase, setPhrase] = useState(null);
  const { phraseId } = useParams();
    
  const getPhrase = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL}/api/phrases/${phraseId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const onePhrase = response.data;
        setPhrase(onePhrase);
      })
      .catch((error) => console.log(error));
  };
    
  useEffect(()=> {
    getPhrase();
  }, [] );
 
  return (
    <div className="TranslatedPhrasesPage">
      {phrase && (
        <>
          <h1>{phrase.engPhrase}</h1>
          <p>{phrase.selectedLang}</p>
        </>
      )}

      <Link to="/phrases">
        <button>Back to common phrases</button>
      </Link>
          
      <Link to={`/phrases/edit/${phraseId}`}>
        <button>Edit Phrase</button>
      </Link>
      
    </div>
  );
}

export default TranslatedPhrasesPage;