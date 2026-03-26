import OnLineIcon from "../../OnLineIcon/OnLineIcon";


const PersonListItem = (props) => {
  const { person } = props; // Отримуємо person з props окремим рядком
  const { personImage, personName, personLastName, isOnline } = person;
  return (
    <div>
      <img src={personImage} alt={`${personName} ${personLastName}`} width="400" height="400" />
      <h3> Full Name: {personName} {personLastName} </h3>
      <div>
        isOnline: <OnLineIcon isOnline={isOnline} />
      </div>
    </div>
  );
};

export default PersonListItem;
