import { PERSONS } from "../../utils";
import PersonListItem from "../PersonListItem/PersonListItem";

const ProductList = () => {
  return (
    <div>
      {PERSONS.map((person) => (
        <PersonListItem key={person.id} person={person} />
      ))}
    </div>
  );
};

export default ProductList;
