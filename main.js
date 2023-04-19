const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const calculate = document.getElementById('calcular')
const reiniciar = document.getElementById('reiniciar')
const result = document.getElementById('resultado')

calculate.addEventListener('click',function(){

    if (peso.value=='' || altura.value==''){
        alert('Existe un error en los datos')
    }else if(altura.value<0.65 || altura.value>2.89){
        alert('DIgite la altura en metros y el peso en kilogramos')
    }else if (peso.value<2.5 || peso.value>544){
        alert('DIgite la altura en metros y el peso en kilogramos')
    }else{
        let resultado = peso.value /altura.value**2
    result.innerHTML=`${resultado.toFixed(2)}`
    }
})

reiniciar.addEventListener('click', function(){
    peso.value=''
    altura.value=''
    result.innerHTML=''
})