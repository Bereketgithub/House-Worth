import React, { useState } from 'react';
import './DropdownMenu.css'; // Import the CSS file for this component

const Terms = [
  { label: 'Fall', value: 'fall' },
  { label: 'Spring', value: 'spring' },
  { label: 'Jan', value: 'Jan' },
  { label: 'Summer', value: 'summer' },
  { label: 'All', value: 'all' },
];

const years = [
  { label: '2022', value: '2022' },
  { label: '2023', value: '2023' },
  { label: '2024', value: '2024' },
  { label: '2025', value: '2025' },
];
const sorts= [
    { label: 'price', value: '0 usd' },
    { label: 'distance', value: '1111 KM' },
    { label: 'Bedrooms', value: '2 beds' },
  ];

const DropdownMenu = () => {
  const [selectedSeason, setSelectedSeason] = useState(Terms[0].value);
  const [selectedYear, setSelectedYear] = useState(years[0].value);
  const [selectedsorts,setSelectedsorts]=useState(sorts[0].value);

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handlesortsChange=(event)=>{
    setSelectedsorts(event.target.value)
  }

  return (
    <div className="dropdown-menu">
      <label htmlFor="Terms">Terms:</label>
      <select id="Terms" value={selectedSeason} onChange={handleSeasonChange}>
        {Terms.map((season) => (
          <option key={season.value} value={season.value}>
            {season.label}
          </option>
        ))}
      </select>
      
      <label htmlFor="years">Years:</label>
      <select id="years" value={selectedYear} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year.value} value={year.value}>
            {year.label}
          </option>
        ))}
      </select>
      <label htmlFor="sorts">Sorts:</label>
      <select id="sorts" value={selectedsorts} onChange={handlesortsChange}>
        {years.map((sorts) => (
          <option key={sorts.value} value={sorts.value}>
            {sorts.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
