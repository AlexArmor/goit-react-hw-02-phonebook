export const ContactList = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
};
