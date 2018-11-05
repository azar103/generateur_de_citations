const citations = [
   {
    auteur: 'Henry David Thoreau',
    citation: 'Si je suis venu au monde, ce n’est pas pour le transformer en un lieu où il fasse bon vivre, mais pour y vivre.',
   },
   {
    auteur: 'Henry David Thoreau',
    citation: 'L’élite n’est, matériellement, ni plus avisée ni meilleure que la masse.',
  },
  {
    auteur: 'Henry David Thoreau',
    citation: 'En tuant le temps, on blesse l’éternité.',
  },
  {
    auteur: 'Henry David Thoreau',
    citation: 'On rougit d’abord de son crime et puis on s’y habitue.',
  },
  {
    auteur: 'Henry David Thoreau',
    citation: 'Tu dois vivre dans le présent, te lancer au-devant de chaque vague, trouver ton éternité à chaque instant.',
  },
  {
    auteur: 'Ayn Rand',
    citation: 'Ce que tu veux peut t\'appartenir, mais tu dois l\'accepter, y adhérer de toute ton âme.',
  },
  {
    auteur: 'Ayn Rand',
    citation: 'Une plante peut obtenir sa nourriture du sol dans lequel elle pousse. Un animal doit chasser pour l’obtenir. L’homme doit la produire.',
  },
  {
    auteur: 'Ayn Rand',
    citation: 'Nous sommes tous frères sous la peau et j\'aimerais écorcher l\'humanité pour le prouver.',
  },
  {
    auteur: 'Ayn Rand',
    citation: 'Le bonheur indique la réussite et la vie, la souffrance est un signal d’avertissement de défaite et de mort.',
  },
  {
    auteur: 'Ayn Rand',
    citation: 'L’homme doit vivre pour son propre intérêt, ne sacrifiant ni lui-même aux autres, ni les autres à lui-même. Vivre pour son propre intérêt signifie que l’accomplissement de son propre bonheur est le plus haut but moral de l’homme.',
  }
  
  
];


const getRandomMax = (max) => Math.floor(Math.random() * Math.floor(max));
let index = getRandomMax(citations.length);
  document.getElementById('citation').innerHTML='<p class="citation" id="quot">'+citations[index].citation+ '<span id="auteur">'+'-'+citations[index].auteur+'</span></p>';

document.getElementById('click').addEventListener('click',function(){
  let index = getRandomMax(citations.length);
  document.getElementById('citation').innerHTML='<p class="citation" id="quot">'+citations[index].citation+ '<span id="auteur">'+'-'+citations[index].auteur+'</span></p>';
});
document.getElementById('twitter').addEventListener('click',
  
  function(){
     var text = document.getElementById("quot").textContent;  
  window.open("https://twitter.com/intent/tweet?text="+text,'twitter',"menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
});