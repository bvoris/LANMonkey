var backgr1="images/1a.jpg"
var backgr2="images/2a.jpg"
var backgr3="images/3a.jpg"

var cur=Math.round(6*Math.random())
if (cur<=1)
backgr=backgr1
else if (cur<=4)
backgr=backgr2
else
backgr=backgr3
document.write('<body background="'+backgr+'" bgcolor="">')
