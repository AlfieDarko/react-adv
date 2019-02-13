import React from "react";

// data list
const starWarsChars = [
  { name: "Luke", side: "light" },
  { name: "Darth Vader", side: "dark" },
  { name: "Obi-wan Kenobi", side: "light" },
  { name: "Palpatine", side: "dark" }
];

// const withTransformProps = (transformFunc) => {
//   const ConfiguredComponent = (BaseComponent) => {
//     return (baseProps) => {
//       const transformedProps = transformFunc(baseProps);
//       return <BaseComponent {...transformedProps} />;
//     };
//   };
//   return ConfiguredComponent;
// };

const withTransformProps = mapperFunc => BaseComponent => baseProps => {
  const transformedProps = mapperFunc(baseProps);
  return <BaseComponent {...transformedProps} />;
};

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

//  In the first parenthesis we pass in the mapper function.
// the mapperFunc takes the baseProps as params.
// (It looks like it takes the baseProps first but this isnt so!!)
// we save its return value as transformedProps
// we pass this into BaseComponent  as props and
// return the BaseComponent as the final return value

// This makes the code modular and extendable.
// Abit confusing to read but you will get over it.
const FilteredList = withTransformProps(({ list, side }) => ({
  list: list.filter(FilteredListchar => FilteredListchar.side === side)
}))(renderDisplayList);

const FilteredListComponent = <FilteredList side="dark" list={starWarsChars} />;
//  ReactDOM.render (
//     <FilteredList
//        side='dark'
//        list={starWarsChars}
//     />,
//     document.getElementById('app')
//  )
export default FilteredListComponent;
