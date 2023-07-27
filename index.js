function generateMessage() {
  let data = [
    "Aujourd'hui est un bon jour pour mange du poulet",
    " Gedeon Tu es une personne incroyable",
    "Tu peux tout accomplir avec DIEU"
  ];
  let message = data[Math.floor(Math.random() * data.length)];
  return message;
}