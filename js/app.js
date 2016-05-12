$(document).ready(function() {
var count = 0

init();

function init(){
makeMove();

reset();
}

function makeMove() {
$('.btn').on('click', function(){
    if (isEven(count)) {
    $(this).text('X');
    count++;
    checkX();
    checkTie();    
    
    } else {

    $(this).text('O')
    count++;
    checkO();
    checkTie();    
    }
    
})
}


function isEven(x) { return (x%2)==0; }
    
function reset() {
    $('#reset').on('click', function(){
        location.reload();
    })
}

function checkTie(){
var checkList = 0;
$('.all-spaces li').each(function () { 
   
   if ($(this).text() == 'X' || $(this).text() == 'O') {
       checkList++;
   }
    
})
if (checkList == 9) {
    alert('Tie.')
}
}

function checkO() {
    if ($("#one").text() == 'O' && $("#two").text() == 'O' && $("#three").text() == 'O' || $("#four").text() == 'O' && $("#five").text() == 'O' && $("#six").text() == 'O' || $("#seven").text() == 'O' && $("#eight").text() == 'O' && $("#nine").text() == 'O' || $("#one").text() == 'O' && $("#four").text() == 'O' && $("#seven").text() == 'O' || $("#two").text() == 'O' && $("#five").text() == 'O' && $("#eight").text() == 'O' || $("#three").text() == 'O' && $("#six").text() == 'O' && $("#nine").text() == 'O' || $("#one").text() == 'O' && $("#five").text() == 'O' && $("#nine").text() == 'O' || $("#three").text() == 'O' && $("#five").text() == 'O' && $("#seven").text() == 'O')
   {
	 alert('O has won the game. Start a new game');
   } 
}
  
function checkX() {
    if ($("#one").text() == 'X' && $("#two").text() == 'X' && $("#three").text() == 'X' || $("#four").text() == 'X' && $("#five").text() == 'X' && $("#six").text() == 'X' || $("#seven").text() == 'X' && $("#eight").text() == 'X' && $("#nine").text() == 'X' || $("#one").text() == 'X' && $("#four").text() == 'X' && $("#seven").text() == 'X' || $("#two").text() == 'X' && $("#five").text() == 'X' && $("#eight").text() == 'X' || $("#three").text() == 'X' && $("#six").text() == 'X' && $("#nine").text() == 'X' || $("#one").text() == 'X' && $("#five").text() == 'X' && $("#nine").text() == 'X' || $("#three").text() == 'X' && $("#five").text() == 'X' && $("#seven").text() == 'X')
   {
	 alert('X has won the game. Start a new game');
}}
    
});