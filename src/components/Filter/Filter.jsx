import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({value, contacts,onChange }) => {
   return (
      contacts.length > 0 && (<FilterLabel>
       Find contacts by name
       <FilterInput type="text" value={value} onChange={onChange} />
     </FilterLabel>)    
   );
}