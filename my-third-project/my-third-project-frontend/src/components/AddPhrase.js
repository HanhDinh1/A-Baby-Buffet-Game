import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddPhrase(props) {
  const [engPhrase, setEngPhrase] = useState("");
  const [selectedLang, setSelectedLang] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { engPhrase, selectedLang };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .post(
        `${API_URL}/api/phrases`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        // Reset the state
        setEngPhrase("");
        setSelectedLang("");
        props.refreshPhrases();
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="AddPhrase">
      <h3>Add A Common Phrase</h3>

      <form onSubmit={handleSubmit}>
        <label>In English:</label>
        <input
          type="text"
          name="engPhrase"
          value={engPhrase}
          onChange={(e) => setEngPhrase(e.target.value)}
        />

        <label>In selected Language:</label>
        <textarea
          type="text"
          name="selectedLang"
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPhrase;