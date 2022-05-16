import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

export default function Operation() {
  const location =  useLocation();
  const op = location.pathname === '/lcm' ? 'LCM' : 'HCF';
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [userResult, setUserResult] = useState('');
  const [depen, setDepen] = useState([firstNumber,secondNumber]);
  const Submit = (e) =>{
    e.preventDefault();
    const n1 = Number(firstNumber);
    const n2 = Number(secondNumber);
    setResult(op === 'LCM' ? l(n1,n2) : h(n1,n2));
    setDepen([n1,n2]);
  }
  useEffect(()=>{
    function final(depen){
      let n1 = depen[0], n2 = depen[1];
      setUserResult(`${op} of ${n1} and ${n2} is ${result}`);
    }
    final(depen);
  },[depen,op,result]);
  let l = (n1, n2) => {
    let lar = Math.max(n1, n2);
    let small = Math.min(n1, n2);
    let i = lar;
    while(i % small !== 0){
      i += lar;
    }
    return i;
  }
  let h = (n1,n2) => {
    let hcf;
    for (let i = 1; i <= n1 && i <= n2; i++) {
      if( n1 % i === 0 && n2 % i === 0) {
        hcf = i;
      }
    }
    return hcf;
  }
  return (
    <>
        <form className='container' onSubmit={Submit}>
            <div className="mb-3">
                <label htmlFor="firstNumber" className="col-sm-2 col-form-label">First number</label>
                <div className="col-sm-10">
                <input type="number" className="form-control" value={firstNumber} onChange={(e)=>{setFirstNumber(e.target.value)}} id="firstNumber"/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="secondNumber" className="col-sm-2 col-form-label">Second number</label>
                <div className="col-sm-10">
                <input type="number" className="form-control" value={secondNumber} onChange={(e)=>{setSecondNumber(e.target.value)}} id="secondNumber"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Calculate</button>
        </form>
        <div className='container mt-2'>
            <span className='btn btn-success'>{userResult}</span>
        </div>
    </>
  )
}
