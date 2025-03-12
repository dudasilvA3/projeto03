/*

<h2>Cardápio do dia</h2>
<h3>Segunda feira</h3>
<section>
    <ul>
        <li>Arroz</li>
        <li>Feijão</li>
        <li>Farofa</li>
        <li>laranja</li>
        <li>couve</li>

    </ul>
    <figure>
        <img src="img/image 3.png">
    </figure>
</section>
*/
const main=document.querySelector('main');//Selecionar a tag main
main.innerHTML="<h2>Cardápio do dia</h2>";
const diaDaSemana=['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'ábado-letivo']
const hoje = new Date().getDay();
//Date informa a data e o getDay() informa qual dos 7 (0-6)
const diaAtual = diaDaSemana[hoje]
alert(diaAtual)
