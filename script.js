'use strict'
//Seleção de elementos
const altura = document.getElementById('altura')
const peso = document.getElementById('kilo')
const resposta1 = document.getElementById('res1')
const resposta2 = document.getElementById('res2')
const resposta3 = document.getElementById('res3')
const títulorespostas = document.querySelector('#titleanswer')

//Interação da página
function operar(){
    //Lógica da calculadora
    let Altura = Number(altura.value)
    let Peso = Number(peso.value)
    let IMC = parseInt(Peso / (Altura ** 2))

    //Parâmetros para as condições
    let mínimo = Number.parseInt(18 * Altura ** 2) 
    let máximo = Number.parseInt(24 * Altura ** 2)
    
    //Respostas finais condicionais
    resposta1.innerText = `O seu índice de massa corporal é aproximadamente ${IMC} k/m².`

    títulorespostas.style.display = 'block'
    
    if(IMC >= 18.5 && IMC <= 24){
        resposta2.innerText = `Parabéns! Isso é um bom sinal de que você está saudável e dentro da sua margem de peso ideal, no entanto, consulte um médico regularmente.`
    } else if(IMC <= 18 ){
        if(IMC == 17){
            resposta2.innerText = ` Você está abaixo do peso, procure um médico.`
        }else if(IMC < 17){
            resposta2.innerText = ` Você está muito abaixo do peso, procure um médico o quanto antes, pois você está a beira da desnutrição.`
        }
    } else{
        if(IMC >= 25 && IMC <= 27){resposta2.innerText = `Você está com sobrepeso. Procure acompanhamento médico.`
        }else{
            resposta2.innerText = ` Você está muito acima do seu peso ideal. Procure um especialista imediatamente para iniciar um tratamento.`
        }
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
