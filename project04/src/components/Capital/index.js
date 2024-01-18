import { useState} from 'react';
import './index.css';

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
];

function Capitals() {
  const [selectedCapital, setSelectedCapital] = useState('New Delhi');
  const [country, setCountry] = useState('India');

  const handleCountrySelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedCapital(selectedValue);

    // Find the corresponding country for the selected capital
    const selectedCountry = countryAndCapitalsList.find(
      (item) => item.capitalDisplayText === selectedValue
    );

    // Update the state with the corresponding country
    setCountry(selectedCountry ? selectedCountry.country : '');
  };

  return (
    <>
      <div className="container">
        <div className="container1">
          <h1>Countries And Capitals</h1>
          <div className="selector">
            <select
              id="countrySelect"
              name="countrySelect"
              value={selectedCapital}
              onChange={handleCountrySelect}
            >
              {countryAndCapitalsList.map((item) => (
                <option key={item.id} value={item.capitalDisplayText}>
                  {item.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is the capital of which country?</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    </>
  );
}

export default Capitals;
