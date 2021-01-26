
import './App.css';
import Profil from './Profil/Profil';
import img from './image.jfif';


function App() {

  const handleName = (v)=>{
    alert(v);
}
  

  return (
    <div >
      <Profil fullName="sabrine ben sassi" bio="it-engineering" profession='IT-Engineering' fnc={handleName}  >
        <img src={img} alt="image profil"/>

      </Profil>
      {/* <button onClick={qfff}>non</button> */}
    </div>
  );
}

export default App;
