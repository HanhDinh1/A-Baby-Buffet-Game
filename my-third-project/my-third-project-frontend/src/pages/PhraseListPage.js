import { useState, useEffect } from "react";
import axios from "axios";
import AddPhrase from "./../components/AddPhrase";
import PhraseCard from "./../components/PhraseCard";

const API_URL = "http://localhost:5005";

function PhraseListPage() {
  const [phrases, setPhrases] = useState([]);

  const getAllPhrases = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/phrases`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setPhrases(response.data))
      .catch((error) => console.log(error));
  };

  // Set this effect will run only once, after the initial render by setting the empty dependency array - []
  useEffect(() => {
    getAllPhrases();
  }, [] );

  return (
    <div className="PhraseListPage">
      
      <AddPhrase refreshPhrases={getAllPhrases} />
      
      { phrases.map((phrase) => <PhraseCard key={phrase._id} {...phrase} />  )} 
       
    </div>
  );
}

export default PhraseListPage;

