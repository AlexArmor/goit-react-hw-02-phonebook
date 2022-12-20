import { Item } from './ContactList.styled';
import { BtnDeleteItem } from './ContactList.styled';

export const ContactList = ({ data, deleteContact }) => {
  return (
    <ul>
      {data.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <BtnDeleteItem type="button" onClick={() => deleteContact(id)}>
              delete
            </BtnDeleteItem>
          </Item>
        );
      })}
    </ul>
  );
};
