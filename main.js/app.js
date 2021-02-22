//--------Type-Animation---------//
var data = ["Abdalrhman","Eldip","Front End","Developer"];
var count = 0;
var index = 0;
var words = "";
var leter = "";

(function type(){
  if(count === data.length){
      count=0;
  }
  words = data[count];
  leter = words.slice(0,index++);
  document.querySelector('.type').innerHTML = leter;
  if(leter.length === words.length){
      index = 0;
      count++;
  }
  setTimeout(type,400);
})();
//--------Type-Animation---------//

