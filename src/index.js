import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css'
import App from "./App"


// let curDate=new Date(2023,5,7,4);//year,mm,date,hr
// curDate=curDate.getHours();


// let greeting="";
// const cssStyle={};  //Its an empty object

// if(curDate>=1 && curDate<12)
// {
// greeting="Good Morning";
// cssStyle.color="green";//dynamically add attribute to color ie. in cssStyle
// }else if(curDate>=12 && curDate<19){
//   greeting="Good Afternoon";
//   cssStyle.color="Orange";
// }
// else{
//   greeting="Good Night";
//   cssStyle.color="Black";
// }






ReactDOM.render(
  <>
<App/>
  {/* <div>
  <h1>Hello Sir Good, <span style={cssStyle}>{greeting}</span></h1>
  </div> */}
  </>,
  document.getElementById('root')
);