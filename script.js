let URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_BOBirZpzc9syygUoXyJdiIe62S6A2pVto4llhEdY" ;
let select = document.querySelectorAll("#form select");

let info;
let checkBtn = document.querySelector("#check-btn");
let hasBeenCalled = false;

for(let sel of select){
for(let code in currencyCodes){
    let option = document.createElement("option");
    option.innerText= `${code}  - ${currencyCodes[code].name}`;
    option.value= code;
    sel.append(option);
    if(sel.name == "currency" && code== "USD")
    {
        option.selected="select";
    }
    else if(sel.name != "currency" && code== "PKR"){
        option.selected="select";
    }
}
sel.addEventListener("change", ()=>{ sel.parentElement.querySelector("img").setAttribute("src", `https://flagsapi.com/${currencyCodes[sel.value].code}/flat/64.png`) 
})
}

function getData(curr, currVal, cvtCurr){


let data = info.data;
if(curr != "select currency" && cvtCurr != "select currency" && currVal){
let inUsd = currVal / (data[curr].value);
let result = inUsd * (data[cvtCurr].value);
document.querySelector("#result").value= result.toFixed(3);
}
else{
    document.querySelector("#result").innerText= "Select Both Currencies";
}

}



checkBtn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    let curr = document.querySelector("#currency").value;
    let currVal = document.querySelector("#amount").value;
    let cvtCurr = document.querySelector("#convert-into").value;

    if (!hasBeenCalled) {
        (async ()=>{
            let response = await fetch(URL);
             info = await response.json();
             await getData(curr, currVal, cvtCurr);
        
        })();
        hasBeenCalled = true;
    } else {
        getData(curr, currVal, cvtCurr);
    }
 


});
