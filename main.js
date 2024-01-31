let szamok=[]


document.getElementById("gombplusz").addEventListener("click",()=>{
    szamok.push(document.getElementById("input").value)
    document.getElementById("szamok").innerText=szamok
})

