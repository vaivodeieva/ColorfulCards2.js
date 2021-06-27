import './App.css';
import ColorfulCards from './components/ColorfulCards';
import MyContactsTitle from './components/MyContactsTitle';
import contacts from './contacts';

function App() {
  return (
    <div >
     
      <MyContactsTitle />
      <ColorfulCards
      name={contacts[0].name}
      img={contacts[0].imgURL}
      phone={contacts[0].phone}
      email={contacts[0].email}
      />
     <ColorfulCards
      name={contacts[1].name}
      img={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email}
      />
      <ColorfulCards
      name={contacts[2].name}
      img={contacts[2].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email}
      />
    </div>
  );
}

export default App;
