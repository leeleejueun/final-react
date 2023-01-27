import './App.css';
import React,{useState, useReducer} from 'react'

const initData={
    totalCount :0,
    list: []
}

function reducer(state,action){
    switch(action.type){
        case 'plus' : 
            return{
                totalCount: state.totalCount + action.price,
                list : [
                    ...state.list,
                    {id:0, price:action.price, msg:action.msg, day:action.day}
                ]
            }; //break == return
        case 'minus' : return;
    }
}

const App_tr = () => {
    const [data,dispatch] = useReducer(reducer,initData); // (함수, 데이터)
    
    function test(){
        let date = new Date()
        date = (date.getMonth()+1)+'.'+date.getDay();
        const content = {type:'plus', price:5000, msg:'gd', day:date}
        dispatch(content)
    }

    console.log(data)

    return (
        <>
            {data.totalCount}
           <button onClick={test}></button>
        </>
  )
}

export default App_tr