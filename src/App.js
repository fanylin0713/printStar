import React, {useState} from 'react';

function App() {
  const [upStar, setUpStar] = useState('')
  const [downStar, setDownStar] = useState('')

  const handlePrintStar1 = () => {
    const num = document.getElementById('number').value;
    let starTemp =''
	  for(var i = 1; i<=num; i++){
      for(var j = 1; j<=i; j++){
        starTemp += '*';
      }
      starTemp += "\n";
    }
    setUpStar(starTemp)
  };

  const handlePrintStar2 = () => {
    const num = document.getElementById('number').value;
    let starTemp =''
	  for(var i = num-1; i>0; i--){
      for(var j = 1; j<=i; j++){
        starTemp += '*';
      }
      starTemp += "\n";
    }
    setDownStar(starTemp)
  };

  const print = () => {
    handlePrintStar1();
    handlePrintStar2();
  };

  return (
    <div>
      <div>
        <input id="number" type="number"  placeholder="請輸入數字1~100：" />
        <input type="button" value="print" onClick={print}/>
      </div>
      <div style={{whiteSpace: 'pre-line'}}>{upStar}</div>
      <div style={{whiteSpace: 'pre-line'}}>{downStar}</div>
    </div>
  );
}

export default App;
