import React, { useState } from "react";
// import "./App.css";
function App() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [newAraay, setNewArray] = useState([]);
  const data = {
    Punjab: ["Ludhiana", "Patiala", "Amritsar"],
    Himachal: ["Una", "Mandi", "Kangra"],
    "Utter Pardesh": ["Lucknow", "Varanasi", "Saharnpur"],
  };
  const handleChnage = (e) => {
    setSelectedState(e.target.value);
  };
  const handleChnage2 = (e) => {
    setSelectedCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewArray([...newAraay, { state: selectedState, city: selectedCity }]);
  };
  return (
    <>
      <div className="App"></div>
      {/* <StateandCity/> */}
      <form onSubmit={handleSubmit}>
        <select value={selectedState} onChange={handleChnage}>
          <option value="">Select State</option>
          {Object.keys(data).map((ele, index) => (
            <option key={index} value={ele}>
              {ele}
            </option>
          ))}
        </select>
        <select value={selectedCity} onChange={handleChnage2}>
          <option value="">Select City</option>
          {selectedState &&
            data[selectedState].map((ele, index) => (
              <option value={ele} key={index}>
                {ele}
              </option>
            ))}
        </select>

        <button type="submit">Add</button>
      </form>


      {newAraay.length >= 1 && (
     <table>
     <tr>
       <th>State</th>
       <th>city</th>
     </tr>
     {newAraay.map((data, index) => (
       <tr key={index}>
         <td>{data.state}</td>
         <td>{data.city}</td>
       </tr>
     ))}
   </table>
      )}
 
    </>
  );
}
export default App;
