import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const API_URL = "http://localhost:5005";

function EditPhrasePage(props) {
  const [engPhrase, setEngPhrase] = useState("");
  const [selectedLang, setSelectedLang] = useState("");

  const navigate =  useNavigate();
  const { phraseId } = useParams();
  
  
  useEffect(() => {
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
        setEngPhrase(onePhrase.engPhrase);
        setSelectedLang(onePhrase.selectedLang);
      })
      .catch((error) => console.log(error));
    
  }, [phraseId]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { engPhrase, selectedLang };
  
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');  

    // Send the token through the request "Authorization" Headers   
    axios
      .put(
        `${API_URL}/api/phrases/${phraseId}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }              
      )
      .then((response) => {
        navigate(`/phrases/${phraseId}`)
      });
  };
  
  
  const deletePhrase = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');      
    
    // Send the token through the request "Authorization" Headers   
    axios
      .delete(
        `${API_URL}/api/phrases/${phraseId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }           
      )
      .then(() => navigate("/phrases"))
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="EditPhrasePage">
      <h3>Edit the Phrase</h3>

      <form onSubmit={handleFormSubmit}>
        <label>In English</label>
        <input
          type="text"
          name="engPhrase"
          value={engPhrase}
          onChange={(e) => setEngPhrase(e.target.value)}
        />
        
        <label>In Selected Language</label>
        <textarea
          name="selectedLang"
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        />

        <button type="submit">Update Phrase</button>
      </form>

      <button onClick={deletePhrase}>Delete Phrase</button>
    </div>
  );
}

export default EditPhrasePage;