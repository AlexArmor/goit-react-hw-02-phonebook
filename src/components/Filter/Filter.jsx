export const Filter = ({ onInputChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" onChange={e => onInputChange(e.target.value)} />
    </>
  );
};
