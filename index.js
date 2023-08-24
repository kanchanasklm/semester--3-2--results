let buttonEl=document.getElementById("button");
let finalResultEl=document.getElementById("result");

let CNS_El=document.getElementById("CNS");
let AI_El=document.getElementById("AI");
let ST_El=document.getElementById("ST");
let RTOS_Or_DIPEl=document.getElementById("RTOS/DIP");
let Lingustics_El=document.getElementById("Lingustics");
let MiniProject_El=document.getElementById("MiniProject");
let ELC_LabEl1=document.getElementById("ELC-LAB-3");
let CDC_El=document.getElementById("CDC");
let SummerInternEl=document.getElementById("SummerIntern");


let creddits=24.5; 
let result=0;
// let count=0;
function credits(subGrade, creditts) {

    // count++;
    if (subGrade === "Ex") {
        // result += (10 * creditts);
        return (10 * creditts)
        

    } else if (subGrade === "A") {
        // result += (9 * creditts);
        return (9 * creditts)
    } else if (subGrade === "B") {
        // result += (8 * creditts);
        return (8 * creditts);
        
    } else if (subGrade === "C") {
        // result += (7 * creditts);
        return (7 * creditts)
    } else if (subGrade === "D") {
        // result += (6 * creditts);
        return (6 * creditts)
    }
    else if (subGrade === "E") {
        // result += (6 * creditts);
        return (5 * creditts)
    }
    else if (subGrade === "F") {
        // result += (6 * creditts);
        return 0
    }
    
//    finalResultEl.textContent=result/creddits;
}



buttonEl.onclick=function()
{
    let CNSElGrade = CNS_El.value;
    let AI_ElGrade = AI_El.value;
    let ST_ElGrade= ST_El.value;
    let RTOS_Or_DIPElGrade= RTOS_Or_DIPEl.value; 
    let Lingustics_ElGrade=Lingustics_El.value;
    let MiniProject_ElGrade=MiniProject_El.value;
    let ELC_LabEl1Grade=ELC_LabEl1.value;
    let CDC_ElGrade=CDC_El.value;
    let SummerInternElGrade=SummerInternEl.value;

    

   
    result+=credits(CNSElGrade,4);
    result+=credits(AI_ElGrade,4);
    result+=credits(ST_ElGrade,3);
    result+=credits(RTOS_Or_DIPElGrade,3);
    result+=credits(Lingustics_ElGrade,3);
    result+=credits(MiniProject_ElGrade,3);
    result+=credits(ELC_LabEl1Grade,1.5);
    result+=credits(CDC_ElGrade,0);
    result+=credits(SummerInternElGrade,3);

    
    // alert(result/creddits);
    // if(result===0){
    //     finalResultEl.textContent="you failed"
    // }
    finalResultEl.textContent=(result/creddits).toFixed(2);
    result=0;
};