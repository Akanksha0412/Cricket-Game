var fullScore1:number;
var fullScore2:number;
var max:number=0;
var manOfTheMatch:string="";



class value {
    constructor() {
            var sum:number;
            var totalScore:number=0;
            var table1 = document.getElementById("teamOne");
            var tableBody = document.getElementById("bodyOne");
            table1.appendChild(tableBody);
            for(var j=1;j<=10;j++)
            {
                sum=0;
                var tableR = document.createElement("tr");
                var tableH = document.createElement("th");
                tableH.innerText = "Person "+j;
                tableBody.appendChild(tableR);
                tableR.appendChild(tableH);
                for(var i=1;i<7;i++)
                {
                    var tableC = document.createElement("td");
                    var data = Math.floor((Math.random() * 10) + 1);
                    sum += data;
                    totalScore += data;
                    tableC.innerHTML = ""+data;
                    tableR.appendChild(tableC);
                }
                if(sum>max)
                {
                    max=sum;
                    manOfTheMatch = "Person "+j;
                }
                var totalSum =  document.createElement("td");
                totalSum.innerHTML = ""+sum;
                tableR.appendChild(totalSum);
            }   
            fullScore1 = totalScore;
            var showScore = document.getElementById("team1Score");
            showScore.innerHTML = ""+totalScore;
        }
}

class value2 {
    constructor() {
        var sum:number;
        var totalScore:number=0;
        var count=11;
        var table1 = document.getElementById("teamTwo");
        var tableBody = document.getElementById("bodyTwo");
        table1.appendChild(tableBody);
        for(var j=1;j<=10;j++)
        {
            sum=0;
            var tableR = document.createElement("tr");
            var tableH = document.createElement("th");
            tableH.innerText = "Person "+count;
            count++;
            tableBody.appendChild(tableR);
            tableR.appendChild(tableH);
            for(var i=1;i<=6;i++)
            {
                var tableC = document.createElement("td");
                var data = Math.floor((Math.random() * 10) + 1);
                sum += data;
                totalScore += data;
                tableC.innerHTML = ""+data;
                tableR.appendChild(tableC);
            }
            if(sum>max)
            {
                max=sum;
                var c = count;
                c = c-1;
                manOfTheMatch = "Person "+c;
            }
            var totalSum =  document.createElement("td");
            totalSum.innerHTML = ""+sum;
            tableR.appendChild(totalSum);
        }   
        fullScore2 = totalScore;
        var showScore = document.getElementById("team2Score");
        showScore.innerHTML = ""+totalScore;
    }
}

function show(){
    new value();
}

var buttonOne = document.getElementById("resultOne");
buttonOne.onclick = show;

function show2(){
    new value2();
}

var buttonTwo = document.getElementById("resultTwo");
buttonTwo.onclick = show2;

function showWinner(){
    if(fullScore1>fullScore2)
    {
        var res = document.getElementById("winnerTeam");
        res.innerHTML = "TEAM 1";
    }
    else
    {
        var res = document.getElementById("winnerTeam");
        res.innerHTML = "TEAM 2";
    }
    var res2 = document.getElementById("winnerMan");
    res2.innerHTML = manOfTheMatch;
}

var winningButton = document.getElementById("winner");
winningButton.onclick = showWinner;


var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("countDown").innerText = ""+timeleft;
  timeleft -= 1;
}, 1000);