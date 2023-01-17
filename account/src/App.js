import './App.scss';
import Insert from './Insert';
import { MyContext } from './Context';
import { useState } from 'react';


function App() {

  const [data,SetData] = useState([]);
  const [total,SetTotal] = useState(0);

  
  function money (value) {
    SetData([...data,value]);
  }

  var today = new Date();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  var dateString = month  + '.' + day;

  console.log(data)
  return (
    <MyContext.Provider value={{money,SetTotal,total}}>
      <div className="App">
        <article>
          <header>
            <h1>2023년 입출금 내역</h1>

            <p>{total.toLocaleString()}</p>
          </header>
          <main>
            {
              data&&data.map((obj,key)=>{
                return <div key={key}>
                          <p>{dateString} {obj.text}</p>
                          <p>{obj.price.toLocaleString()}</p>
                        </div>
              })
            }
          </main>
        </article>
        <Insert/>
      </div>
    </MyContext.Provider>
  );
}

export default App;
