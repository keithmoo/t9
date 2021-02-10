import React from 'react'

export default class extends React.Component {
constructor(props){
  super(props)
  this.state={
    punchCard: 'awaiting input'
  }
}

handleSubmit = (e) => {
  e.preventDefault();
  
  const arr1 = e.target.password.value.toLowerCase();
  let arr2 = arr1.replaceAll('a','2');
  let arr3 = arr2.replaceAll('b','22');
  let arr4 = arr3.replaceAll('c','222');
  let arr5 = arr4.replaceAll('d','3');
  let arr6 = arr5.replaceAll('e','33');
  let arr7 = arr6.replaceAll('f', '333');
  let arr8 = arr7.replaceAll('g', '4');
  let arr9 = arr8.replaceAll('h', '44');
  let arr10 = arr9.replaceAll('i','444');
  let arr11 = arr10.replaceAll('j','5');
  let arr12 = arr11.replaceAll('k','55');
  let arr13 = arr12.replaceAll('l', '555');
  let arr14 = arr13.replaceAll('m','6');
  let arr15 = arr14.replaceAll('n','66');
  let arr16 = arr15.replaceAll('o','666');
  let arr17 = arr16.replaceAll('p','7');
  let arr18 = arr17.replaceAll('q','77');
  let arr19 = arr18.replaceAll('r','777');
  let arr20 = arr19.replaceAll('s','7777');
  let arr21 = arr20.replaceAll('t','8');
  let arr22 = arr21.replaceAll('u','88');
  let arr23 = arr22.replaceAll('v','888');
  let arr24 = arr23.replaceAll('w','9');
  let arr25 = arr24.replaceAll('x','99');
  let arr26 = arr25.replaceAll('y','999');
  let arr27 = arr26.replaceAll('z','9999');
  this.setState({
    punchCard: arr27
  })
}
render(){
return (
  <>
  <div className="App">
    <form className='theForm' onSubmit={this.handleSubmit}>
      <label htmlFor='input'>
        Enter Text:
      </label>
      <input type='text' name='password' id='password'></input>
      <button type='submit' id='btn'>Submit</button>
    </form>
    <div className='punchCard'>
      {this.state.punchCard}
    </div>
  </div>
  </>
);
}
}

