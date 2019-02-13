import React from "react";

// data list
const starWarsChars = [
  { name: "Luke", side: "light" },
  { name: "Darth Vader", side: "dark" },
  { name: "Obi-wan Kenobi", side: "light" },
  { name: "Palpatine", side: "dark" }
];

// High Order Function (Wrapper) that returns new component with added props
const withFilterProps = BaseComponent => ({ list, side }) => {
  const transformedProps = list.filter(char => char.side === side);
  return <BaseComponent list={transformedProps} />;
};

// UI component that renders Display List
const renderDisplayList = ({ list }) => (
  <div>
    {list.map(char => (
      <div key={char.name}>
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    ))}
  </div>
);

// withFilterProps adds prop option to filter props from either
//dark or light and returns a new component
const FilteredList = withFilterProps(renderDisplayList);

// Out new returned component can now take a side prop that filters the list
// depending on the light or darkside.
const FilteredListComponent = (
  <FilteredList side="light" list={starWarsChars} />
);
//everything is now modular and functional. we can reuse parts, and the HOC does not mutate anything

export default FilteredListComponent;
