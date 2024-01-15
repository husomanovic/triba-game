let pocetna=document.querySelector(".pocetna");
let PocetnaNew=document.querySelector(".PocetnaNew");
let PocetnaHelp=document.querySelector(".PocetnaHelp");
let PocetnaMore=document.querySelector(".PocetnaMore");
let pozadina= document.querySelector(".pozadina")
let mapa1=document.querySelector(".mapa1");
let mapa2=document.querySelector(".mapa2");
let mapa3=document.querySelector(".mapa3");
let mapa4=document.querySelector(".mapa4");
let kraj=document.querySelector(".kraj")
let sat=document.querySelector(".sat")
let ImeIgraca=document.querySelector(".ImeIgraca ")
let Ime=document.querySelector(".Ime")


document.querySelector("#NewGame").addEventListener("click", function() {
    pocetna.style.display="none";
    PocetnaNew.style.display="block";
    ImeIgraca.style.display="none";
    TrenutnaMapa.style.border="solid white"
    restart()

});
document.querySelector("#Help").addEventListener("click", function() {
    document.querySelector(".pocetna").style.display="none";
    PocetnaHelp.style.display="block";
});
document.querySelector("#More").addEventListener("click", function() {
    pocetna.style.display="none";
    PocetnaMore.style.display="block";
});


document.querySelector("#back").addEventListener("click",function(){
    pocetna.style.display="block";
    PocetnaNew.style.display="none";
});
document.querySelector("#back1").addEventListener("click",function(){
    pocetna.style.display="block";
    PocetnaHelp.style.display="none";
});
document.querySelector("#back2").addEventListener("click",function(){
    pocetna.style.display="block";
    PocetnaMore.style.display="none";
});
document.querySelector("#back3").addEventListener("click",function(){
    pocetna.style.display="block";
    kraj.style.display="none";

});
document.querySelector("#start").addEventListener("click",function(){
    sat.style.left=(document.body.offsetWidth)/2 -100+"px"
    sat.style.display="block"
    PocetnaNew.style.display="none"
    tajmer()
    TrenutnaMapa.style.border="solid red";
    Player1=document.querySelector("#Player1").value
    Player2=document.querySelector("#Player2").value
    if(Player1==""){Player1="Player 1"}
    if(Player2==""){Player2="Player 2"}
    imeigraca()


});
document.querySelector("#again").addEventListener("click",function(){
    sat.style.left=(document.body.offsetWidth)/2 -100+"px"
    sat.style.display="block"
    kraj.style.display="none"
    tajmer()
    TrenutnaMapa.style.border="solid red";
    let Player =Player1;
    Player1=Player2;
    Player2=Player;
    imeigraca()
});


document.querySelector("#bt_m1").addEventListener("click",function(){
    mapa1.style.display="block";
    mapa2.style.display="none";
    mapa3.style.display="none";
    mapa4.style.display="none";
    TrenutnaMapa =mapa1
    dugmiciTrenutneMape=[]
    dugmiciTrenutneMape=TrenutnaMapa.querySelectorAll(".b")

});
document.querySelector("#bt_m2").addEventListener("click",function(){
    mapa1.style.display="none";
    mapa2.style.display="block";
    mapa3.style.display="none";
    mapa4.style.display="none";
    TrenutnaMapa =mapa2
    dugmiciTrenutneMape=[]
    dugmiciTrenutneMape=TrenutnaMapa.querySelectorAll(".b")

});
document.querySelector("#bt_m3").addEventListener("click",function(){
    mapa1.style.display="none";
    mapa2.style.display="none";
    mapa3.style.display="block";
    mapa4.style.display="none";
    TrenutnaMapa =mapa3
    dugmiciTrenutneMape=[]
    dugmiciTrenutneMape=TrenutnaMapa.querySelectorAll(".b")

});
document.querySelector("#bt_m4").addEventListener("click",function(){
    mapa1.style.display="none";
    mapa2.style.display="none";
    mapa3.style.display="none";
    mapa4.style.display="block";
    TrenutnaMapa =mapa4
    dugmiciTrenutneMape=[]
    for (let i = 0; i < 90; i++) {
        let randomBroj = Math.floor(Math.random() * 2);
        let btnId;
        if (i < 10) {
            btnId = `b0${i}`;
        } else {
            btnId = `b${i}`;
        };
        let btn = document.querySelector(`.mapa4 #${btnId}`);
        if (randomBroj == 1) {
                btn.style.visibility = "hidden";
        }else{
            btn.style.visibility = "visible";
            dugmiciTrenutneMape.push(btn);
        };
    };
});

//--------------------------------------------------------------------------------------------------------------------------

function imeigraca(){
    // return true
    ImeIgraca.style.display="block"
    if(BrKliknutih % 6 < 2 || BrKliknutih % 6 == 5){
        Ime.style.color="red";
        Ime.innerHTML=Player1;
    }else{
        Ime.style.color="blue";
        Ime.innerHTML=Player2;

    }
}

//--------------------------------------------------------------------------------------------------------------------------

function povrsina(red) {
    let x1,x2,x3,y1,y2,y3;
    
    x1=red[0];
    y1=red[1];
    x2=red[2];
    y2=red[3];
    x3=red[4];
    y3=red[5];

    p=(x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2))/2
    p=Math.abs(p)
};

//--------------------------------------------------------------------------------------------------------------------------

function tackePresjeka(a1, b1, a2, b2, a3, b3, a4, b4) {
    x =((a1*b2-b1*a2)*(a3-a4)-(a1-a2)*(a3*b4-b3*a4)) / ((a1 - a2)*(b3-b4)-(b1-b2)*(a3-a4));
    y =((a1*b2-b1*a2)*(b3-b4)-(b1-b2)*(a3*b4-b3*a4)) / ((a1-a2)*(b3-b4)-(b1-b2)*(a3-a4));

    if (x <= Math.max(a1,a2) &&x >= Math.min(a1,a2) && x <= Math.max(a3,a4) && x >= Math.min(a3,a4) &&
        y <= Math.max(b1,b2) && y >= Math.min(b1,b2) && y <= Math.max(b3,b4) && y >= Math.min(b3,b4)) {
        presjek=false
        return true;
    }

    return false;
}

//--------------------------------------------------------------------------------------------------------------------------

function daliSeSjeku(matrica,red){

    let x1,x2,x3,x4,x5,x6,y1,y2,y3,y4,y5,y6;

    x1=red[0];
    y1=red[1];
    x2=red[2];
    y2=red[3];
    x3=red[4];
    y3=red[5];

    for(let i=0;i<matrica.length;i++){

        x4=matrica[i][0];
        y4=matrica[i][1];
        x5=matrica[i][2];
        y5=matrica[i][3];
        x6=matrica[i][4];
        y6=matrica[i][5];


        if(tackePresjeka(x1,y1,x2,y2,x4,y4,x5,y5)){break};
        if(tackePresjeka(x1,y1,x2,y2,x4,y4,x6,y6)){break};
        if(tackePresjeka(x1,y1,x2,y2,x5,y5,x6,y6)){break};

        if(tackePresjeka(x1,y1,x3,y3,x4,y4,x5,y5)){break};
        if(tackePresjeka(x1,y1,x3,y3,x4,y4,x6,y6)){break};
        if(tackePresjeka(x1,y1,x3,y3,x5,y5,x6,y6)){break};

        if(tackePresjeka(x2,y2,x3,y3,x4,y4,x5,y5)){break};
        if(tackePresjeka(x2,y2,x3,y3,x4,y4,x6,y6)){break};
        if(tackePresjeka(x2,y2,x3,y3,x5,y5,x6,y6)){break};
    };

}

//--------------------------------------------------------------------------------------------------------------------------

function odrediPobjednika(BrKliknutih){
    if(BrKliknutih % 6 == 2){
        document.querySelector("#pobjednik").innerHTML=""+Player1+" win."
    }else{
        document.querySelector("#pobjednik").innerHTML=""+Player2+" win."
    }
}

//--------------------------------------------------------------------------------------------------------------------------

function bojaDugmetaIBordera(dugme,BrKliknutih,TrenutnaMapa){
    if(BrKliknutih % 6 < 3){
        dugme.style.backgroundColor = "red";

    }else{
        dugme.style.backgroundColor = "blue";
    };
    if(BrKliknutih % 6 < 2 || BrKliknutih % 6 ==5 ){
        TrenutnaMapa.style.border="solid red";

    }else{
        TrenutnaMapa.style.border="solid blue";
    };

}

//--------------------------------------------------------------------------------------------------------------------------

function dodajTrokut(){

        let pomocnaLista=[];

        daliTackaPripadaPravoj(red[0],red[1],red[2],red[3],pomocnaLista)
        daliTackaPripadaPravoj(red[0],red[1],red[4],red[5],pomocnaLista)
        daliTackaPripadaPravoj(red[2],red[3],red[4],red[5],pomocnaLista)

        pomocnaLista.forEach(function(elmnt){
            if (iskoristeniDugmici.includes(elmnt)){
                    presjek=false}
            })

        daliSeSjeku(matrica,red)

        povrsina(red)

        if(p>1 && presjek ){
            if(BrKliknutih % 6 == 2){
                svg.innerHTML+= ` <polygon points="${red[0]},${red[1]} ${red[2]},${red[3]} ${red[4]},${red[5]} 
                                                    " style="fill:rgba(0, 255, 0, 0);stroke:rgb(255, 0, 0);stroke-width:3;" />`;
                                
            }else {
                svg.innerHTML+= ` <polygon points="${red[0]},${red[1]} ${red[2]},${red[3]} ${red[4]},${red[5]}
                                                    " style="fill:rgba(0, 0, 255, 0);stroke:rgb(0, 0, 255);stroke-width:3;" />`;
                
            };

            pomocnaLista.forEach(function(elmnt, index) {
                iskoristeniDugmici.push(elmnt);

                setTimeout(function() {
                    elmnt.style.animationName = 'example';
                    elmnt.style.animationDuration = '3s';
                    setTimeout(function() {
                        elmnt.style.visibility = "hidden";
                    }, 2900);
                }, index * 50);

            });

            brTrokutova++;
            matrica.push(red); 

            
        }else{
            BrKliknutih-=3

            red2.forEach(function(elmnt){
                elmnt.style.backgroundColor="gray";
            })

            if(BrKliknutih % 6 < 2 || BrKliknutih % 6 ==5 ){
                TrenutnaMapa.style.border="solid red";
        
            }else{
                TrenutnaMapa.style.border="solid blue";
            };
        }

}

//--------------------------------------------------------------------------------------------------------------------------
function pomocnaDodajTrokut(red){


    let pomocnaLista=[];

    daliTackaPripadaPravoj(red[0],red[1],red[2],red[3],pomocnaLista)
    daliTackaPripadaPravoj(red[0],red[1],red[4],red[5],pomocnaLista)
    daliTackaPripadaPravoj(red[2],red[3],red[4],red[5],pomocnaLista)

    pomocnaLista.forEach(function(elmnt){
        if (iskoristeniDugmici.includes(elmnt)){
                presjek=false}
        })

    daliSeSjeku(matrica,red)

    povrsina(red)

    if(p>1 && presjek ){
        return true;

    }
    return false;

}

//--------------------------------------------------------------------------------------------------------------------------

function restart(){
    matrica=[];
    red=[];
    iskoristeniDugmici =[];
    BrKliknutih =-1;
    svg.innerHTML="";
    brTrokutova=0;
    dugmiciTrenutneMape.forEach(function(dugme) {
        dugme.style.animationName = null;
        dugme.style.backgroundColor="gray";
        dugme.style.visibility = "visible";
    });

};

//--------------------------------------------------------------------------------------------------------------------------

function daliTackaPripadaPravoj(x1,y1,x2,y2,pomocnaLista){
    //x1,x2,y1,y2 - kordinate prave
    //x0,y0 - kordinate tacke
    
    dugmiciTrenutneMape.forEach(function(dugme) {
        let x0=dugme.getBoundingClientRect().left;
        let y0=dugme.getBoundingClientRect().top;
        let duzina=(Math.abs((y2-y1)*x0 - (x2-x1)*y0 + x2*y1 - y2*x1))/(Math.sqrt((y2-y1)**2 + (x2-x1)**2 ));
        if(duzina<11 && Math.max(x1,x2)>x0-10  && Math.min(x1,x2)<x0+10 && Math.max(y1,y2)>y0-10  && Math.min(y1,y2)<y0+10){
            if(!(pomocnaLista.includes(dugme))){
                pomocnaLista.push(dugme)
            }
        }
    });
    
}

//--------------------------------------------------------------------------------------------------------------------------

function imaliJostTrokutova() {

    for (let i = 0; i < dugmiciTrenutneMape.length; i++) {
        let elmnt1 = dugmiciTrenutneMape[i];
        if (!(iskoristeniDugmici.includes(elmnt1))) {

            for (let j = i+1; j < dugmiciTrenutneMape.length; j++) {
                let elmnt2 = dugmiciTrenutneMape[j];
                if (!(iskoristeniDugmici.includes(elmnt2)) && elmnt2 !== elmnt1) {

                    for (let k = j+1; k < dugmiciTrenutneMape.length; k++) {
                        let elmnt3 = dugmiciTrenutneMape[k];
                        if (!(iskoristeniDugmici.includes(elmnt3))) {
                            red2=[elmnt1,elmnt2,elmnt3]
                            red=[elmnt1.getBoundingClientRect().left,elmnt1.getBoundingClientRect().top,
                                elmnt2.getBoundingClientRect().left,elmnt2.getBoundingClientRect().top,
                                elmnt3.getBoundingClientRect().left,elmnt3.getBoundingClientRect().top,]
                            p=0
                            presjek=true
                            pomocnaLista=[];
                            if(pomocnaDodajTrokut(red)){
                                console.log(elmnt1.id,elmnt2.id,elmnt3.id,)
                                return false;
                            }
                            presjek=true
                            pomocnaLista=[];
                            red=[];
                            red2=[]

                        }
                    }


                }
            }


        }
    }

    return true
}

//--------------------------------------------------------------------------------------------------------------------------

function tajmer(){
    let vrijeme=300;
    let pomak=0.02
    let o=1;
    let broj=document.querySelector(".broj")
    let interval=setInterval(function() {
        vrijeme-=1;
        broj.innerHTML=  Math.round(vrijeme/100);
        o-=pomak
        broj.style.opacity=""+o
        if (vrijeme%50==0){
            pomak*=-1
        }
        
        if(vrijeme==-50){
            sat.style.display="none"; 
            pozadina.style.display="none"
            restart();
            clearInterval(interval)
        }
    }, 10);

}

//--------------------------------------------------------------------------------------------------------------------------

function pozoviKraj(){
    pozadina.style.display="block";
    kraj.style.display="block";
    let back=document.querySelector("#back3")
    let again=document.querySelector("#again")
    let pobjednik=document.querySelector("#pobjednik")

    back.style.animationName = 'pomakniUDesno';

    again.style.animationName = 'pomakniULjevo';

    pobjednik.style.animationName = 'pomaknidole';
    setTimeout(function(){
        back.style.animationName = null;        
        again.style.animationName = null;
        pobjednik.style.animationName = null;

    },2500)

}

//--------------------------------------------------------------------------------------------------------------------------

//Scalable Vector Graphics
let svg= document.querySelector(".svg")
let dugmici= document.querySelectorAll(".b");
let TrenutnaMapa =mapa1;
let dugmiciTrenutneMape=TrenutnaMapa.querySelectorAll(".b")
let presjek=true;
let p;
let Player1;
let Player2;
let brTrokutova=0
let matrica=[]
let red=[]
let red2=[]
let iskoristeniDugmici =[]
let ID,x,y;
let BrKliknutih =-1;
dugmici.forEach(function(dugme) {
    dugme.addEventListener("click", function() {

        x=dugme.getBoundingClientRect().left;
        y=dugme.getBoundingClientRect().top;

        red.push(x);
        red.push(y);
        red2.push(dugme)
        
        BrKliknutih++;

        bojaDugmetaIBordera(dugme,BrKliknutih,TrenutnaMapa)
       
        if(BrKliknutih % 3 == 2){   
            p=0
            presjek=true
            pomocnaLista=[];
            dodajTrokut()
            red=[];
            red2=[];
            if (imaliJostTrokutova()){
                odrediPobjednika(BrKliknutih)
                pozoviKraj()
            }
            imeigraca()

            
            red2=[];
            red=[];
        };
    });
});
