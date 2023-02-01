import './App.css';

function App() {
  fetch('http://apis.data.go.kr/6470000/hanbokdict_i/entrylist?serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&numOfRows=10&pageNo=1&query=&responseFormat=json')
  .then((res) => {return res.json()})
  .then((data) => console.log(data))

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
