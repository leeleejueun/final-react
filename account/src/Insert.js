import React, { useRef, useContext } from 'react';
import { MyContext } from './Context';

const Insert = () => {
    
    const elPrice = useRef();
    const elText = useRef(); 

    const {money,SetTotal,total} = useContext(MyContext);
    
    function deposit(e){
        e.preventDefault();
        const value = {price: Number(elPrice.current.value), text:elText.current.value};
        money(value);
        SetTotal(total+Number(elPrice.current.value));
    }

    function withdraw(e){
        e.preventDefault();
        const value = {price:-Number(elPrice.current.value), text:elText.current.value};
        money(value);
        SetTotal(total-Number(elPrice.current.value));
    }

    return (
        <div className='write'> 
            등록하기
            <form>
                <input ref={elPrice} type="text" name="n" placeholder='1,000,000'/>
                <input ref={elText} type="text" name="t" placeholder='메세지'/>
                <div className='submit'>
                    <button onClick={(e) => deposit(e)}>예금하기</button>
                    <button onClick={(e) => withdraw(e)}>출금하기</button>
                </div>
            </form>
        </div>      
    )
}

export default Insert