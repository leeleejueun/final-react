import React,{useState, useReducer} from 'react'

const initData={
    totalCount :0,
    list: [
        {id:0,price:1000,msg:'hello',day:'1.17'},
        {id:1,price:1000,msg:'hello',day:'1.17'}
    ]
}

function reducer(state,action){
    switch('plus'){
        case 'plus' : 가나다; break; //break == return
        case 'minus' : 라마바; break;
    }
}

const App_tr = () => {
    //const [data,SetData] = useState(data);

    const [data,dispatch] = useReducer(reducer,initData); // (함수, 데이터)
    
    // dispatch({type:'plus', price:0, msg:0,day:0})
  
    return (
    <button onClick={()=>dispatch()}>digh</button>
  )
}

export default App_tr