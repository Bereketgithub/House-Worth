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
    { label: 'price', value: 'price' },
    { label: 'distance', value: 'distance' },
    { label: 'Bedrooms', value: 'Bedrooms' },
  ];

const DropdownMenu = () => {
  const [selectedSeason, setSelectedSeason] = useState(Terms[0].value);
  const [selectedYear, setSelectedYear] = useState(years[0].value);
  const [selectedSort, setSelectedSort]=useState(sorts[0].value);

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handlesortsChange=(event)=>{
    setSelectedSort(event.target.value)
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
      <label htmlFor="Sorts">Sort By:</label>
      <select id="sorts" value={selectedSort} onChange={handleYearChange}>
        {sorts.map((sort) => (
          <option key={sort.value} value={sort.value}>
            {sort.label}
          </option>
        ))}
      </select>
     
    </div>
  );
};

export default DropdownMenu;