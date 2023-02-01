import './App.css';
// import $ from 'jquery';
import React, {useEffect, useState} from "react";
function App() {

  // $.ajax({
  //   url: 'http://apis.data.go.kr/6470000/hanbokdict_f/entrylist?serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg==&numOfRows=10&pageNo=1&query=&responseFormat=xml  ',

  //   beforeSend: function () {
  //     console.log('준비');
  //   },
  //   complete: function () {
  //       console.log('완료');
  //   },
  //   success: function (data) {
  //     console.log(data);

  //     $(data)
  //       .find('item')
  //       .each(function (key, el) {
  //           //console.log($(el).find('item').text());
  //       });
  //   },
  // });


    // 한복일반
  const [data,setData] = useState();
// useEffect(()=>{

//   fetch(`https://apis.data.go.kr/6470000/hanbokdict_j/entrylist?serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&responseFormat=xml`)
//   .then ((res) =>  res)
//   .then((data1)=>{setData(data1);})
// }, [])
// console.log(data)

  // //모자
  // fetch('http://apis.data.go.kr/6470000/hanbokdict_c/entrylist?serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&numOfRows=10&pageNo=1&query=&resopnseFormat=json')
  // .then ((res) => {return res.json()})
  // .then((data1)=>console.log(data1))

  // //용어
  // fetch(`http://apis.data.go.kr/6470000/hanbokdict_g/entrylist?serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&numOfRows=10&pageNo=1&query=&responseFormat=json`)
  // .then ((res) => {return res.json()})
  // .then((data2)=>console.log(data2))

  // //역사,사건
  // fetch(`http://apis.data.go.kr/6470000/hanbokdict_f/entrylist?serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&numOfRows=10&pageNo=1&query=&responseFormat=json`)
  // .then ((res) => {return res.json()})
  // .then((data3)=>console.log(data3))

  // //겉옷
  // fetch(`http://apis.data.go.kr/6470000/hanbokdict_a/entrylist?serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&numOfRows=10&pageNo=1&query=&responseFormat=json`)
  // .then ((res) => {return res.json()})
  // .then((data4)=>console.log(data4))
  
  // //장신구
  // fetch(`http://apis.data.go.kr/6470000/hanbokdict_i/entrylist?serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&numOfRows=10&pageNo=1&query=&responseFormat=json`)
  // .then ((res) => {return res.json()})
  // .then((data5)=>console.log(data5))

  fetch(`http://apis.data.go.kr/6470000/hanbokdict_d/entrylist?serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg==&numOfRows=10&pageNo=1&query=&responseFormat=json`)
  .then(res=> res.json())
  .then( abc=> {
    setData(abc)
  })
  console.log(data)
  return (
    <div className="App">
      wsewewe
    </div>
  );
}

export default App;