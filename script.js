let myscore = document.getElementById("myscore").innerHTML;
let compscore = document.getElementById("compscore").innerHTML;
document.getElementById("myscore").innerHTML=0;
document.getElementById("compscore").innerHTML=0;
function myfun1(){
    let a =Math.random();
    let b = a * 3;
    let c = Math.floor(b);
    let stones=document.getElementById("uimg").src="stone.png";
    if(c==0){
        let stone = document.getElementById("cimg").src="stone.png";
        if(stones && stone){
            document.getElementById("result").innerHTML="Match Draw";
            document.body.style.backgroundImage="url('draw.gif')";
        }
    }
    if(c==1){
        let paper = document.getElementById("cimg").src="Paper.png";
        if(stones && paper){
            document.getElementById("result").innerHTML="You looser";
            document.body.style.backgroundImage="url('looser.gif')";
            compscore++;
            document.getElementById("compscore").innerHTML=compscore;
        }
    }
    if(c==2){
        let scissor = document.getElementById("cimg").src="Scissor.png";
        if(stones && scissor){
            document.getElementById("result").innerHTML="You Won";
            document.body.style.backgroundImage="url('winner.gif')";
            myscore++;
            document.getElementById("myscore").innerHTML=myscore;
        }
    }
}
function myfun2(){
    let a =Math.random();
    let b = a * 3;
    let c = Math.floor(b); 
    let papers=document.getElementById("uimg").src="Paper.png";
    if(c==0){
        let stone = document.getElementById("cimg").src="stone.png";
        if(papers && stone){
            document.getElementById("result").innerHTML="You Won";
           document.body.style.backgroundImage="url('winner.gif')";
            myscore++;
            document.getElementById("myscore").innerHTML=myscore;

        }
    }
    if(c==1){
        let paper = document.getElementById("cimg").src="Paper.png";
        if(papers && paper){
            document.getElementById("result").innerHTML="Match Draw";
            document.body.style.backgroundImage="url('draw.gif')";
        }
    }
    if(c==2){
        let scissor = document.getElementById("cimg").src="Scissor.png";
        if(papers && scissor){
            document.getElementById("result").innerHTML="You Looser";
           document.body.style.backgroundImage="url('looser.gif')";
            compscore++;
            document.getElementById("compscore").innerHTML=compscore;
        }
    }
}
function myfun3(){
    let a =Math.random();
    let b = a * 3;
    let c = Math.floor(b);
    let scissors=document.getElementById("uimg").src="Scissor.png";
    if(c==0){
        let stone = document.getElementById("cimg").src="stone.png";
        if(scissors && stone){
            document.getElementById("result").innerHTML="You Looser";
            document.body.style.backgroundImage="url('looser.gif')";
            compscore++;
            document.getElementById("compscore").innerHTML=compscore;
        }
    }
    if(c==1){
        let paper = document.getElementById("cimg").src="Paper.png";
        if(scissors && paper){
            document.getElementById("result").innerHTML="You Won";
            document.body.style.backgroundImage="url('winner.gif')";
            myscore++;
            document.getElementById("myscore").innerHTML=myscore;
        }
    }
    if(c==2){
        let scissor = document.getElementById("cimg").src="Scissor.png";
        if(scissors && scissor){
            document.getElementById("result").innerHTML="Match Draw";
            document.body.style.backgroundImage="url('draw.gif')";
        }
    }
}

