function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")

    resposta.textContent = numero1 + numero2
    //console.log(numero1, numero2)
}

function sub(){
     var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    document.getElementById("respSub").textContent = numero1 - numero2
}

    

function mult(){
     var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    document.getElementById("respMult").textContent = numero1 * numero2
}

function div(){
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    var resp = document.getElementById("respDiv").textContent = numero1 / numero2

    if(numero2 !== 0){
      resp.innerHTML = (numero1 / numero2).toFixed(2)
    }else{
       resp.innerHTML = "Não se divide por 0"
    }

}