let szamok=[]


document.getElementById("gombplusz").addEventListener("click",()=>{
    szamok.push(parseInt(document.getElementById("input").value))
    document.getElementById("szamok").innerText=szamok
})

document.getElementById("min").addEventListener("click",()=>{
    document.getElementById("szamok").innerText=Min(szamok)
})

document.getElementById("max").addEventListener("click",()=>{
    document.getElementById("szamok").innerText=Max(szamok)
})

function Min(szamoko) {
    let min = szamoko[0];
    for(let i = 0; i<szamoko.length;i++){
        if(szamoko[i]<min){
            min = szamoko[i]
        }
    }
    return min;
}

function Max(szamoko) {
    let min = szamoko[0];
    for(let i = 0; i<szamoko.length;i++){
        if(szamoko[i]>min){
            min = szamoko[i]
        }
    }
    return min;
}