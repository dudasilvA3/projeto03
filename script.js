import cardapio from './dados.js';
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
const menuDoDia = cardapio.find(menu => menu.dia === diaAtual);//verificar nos dados se tem aquele dia na lista
console.log(menuDoDia)
if (menuDoDia) {
    const h3 = document.createElement('h3');
    h3.textContent = menuDoDia.dia;//colocar dia da semana no h3
    main.appendChild(h3);//inserir h3 no main
    const section = document.createElement('section');
    const ul = document.createElement('ul');//pegue a opção cardápio do menu e converter o li o texto
    menuDoDia.cardapio.split(',').forEach(item => { //com split, eu determino e que eu removo ex:vírgula e espaço
        const li = document.createElement('li');
        li.textContent = item;//adicionando o ingrediente no li
        ul.appendChild(li);
    })
    section.appendChild(ul);
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = menuDoDia.img;
    img.alt = menuDoDia.alt;
    figure.appendChild(img);
    section.appendChild(figure);
    main.appendChild(section);
} else {
    main.innerHTML = '<h2> Hoje não temos cardápio disponível </h2>'
}


