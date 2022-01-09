

function operar(){
    var altura = document.getElementById('altura')
    var peso = document.getElementById('kilo')
    var resposta1 = document.getElementById('res1')
    var resposta2 = document.getElementById('res2')
    var resposta3 = document.getElementById('res3')
    var títulorespostas = document.querySelector('#titleanswer')
    var Altura = Number(altura.value)
    var Peso = Number(peso.value)
    var IMC = parseInt(Peso / (Altura ** 2))
    var mínimo = Number.parseInt(18 * Altura ** 2) 
    var máximo = Number.parseInt(24 * Altura ** 2)
    resposta1.innerText = `O seu índice de massa corporal é aproximadamente ${IMC} k/m².`
    títulorespostas.style.display = 'block'
    if(IMC >= 18.5 && IMC <= 24){
        resposta2.innerText = `Parabéns! Isso é um bom sinal de que você está saudável e dentro da sua margem de peso ideal, no entanto, consulte um médico regularmente.`
    } else if(IMC <= 18 ){
        resposta2.innerText = ` Você está abaixo do peso, procure um médico.`
    } else{
        resposta2.innerText = `Você está com sobrepeso. Procure acompanhamento médico.`
    } 
    if (Altura == 0 || Peso == 0){
        window.alert('Digite números válidos nos campos "Altura" e "Peso" abaixo.')
        resposta1.style.display = 'none'
        resposta2.style.display = 'none'
    }else{
        resposta1.style.display = 'block'
        resposta2.style.display = 'block'
    }
    if (Altura > 3 || Peso > 300){
        window.alert(`Você tem mesmo ${Altura} metros e ${Peso} Quilos? Acho que você digitou errado.`)
        resposta1.style.display = 'none'
        resposta2.style.display = 'none'
    }else{
        resposta1.style.display = 'block'
        resposta2.style.display = 'block'
    }
   resposta3.innerText = `O seu peso ideal está entre ${mínimo} e ${máximo} quilos.`
   resposta3.style.fontWeight = 'bolder'
}
