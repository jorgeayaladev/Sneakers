//scroll reveal seccion 1
const sr = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 1500,
  delay: 300,
  reset:true,
});
sr.reveal(`.secciones-titulos`);

const sr2 = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset:true,
});
sr2.reveal(`.titulo-principal`);

const sr3 = ScrollReveal({
  origin: "right",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset:true,
});
sr3.reveal(`.seccion-pricipal`);
const sr4 = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset:true,
});
sr4.reveal(`.seccion-pricipal-bottom`);

//seccion-secundaria
const sr5 = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset:true,
});
sr5.reveal(`.main`);
const sr6 = ScrollReveal({
  origin: "right",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset:true,
});
sr6.reveal(`.main-img`);

//seccion-final
const sr7 = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset:true,
});
sr7.reveal(`.seccion-final-titulo , .seccion-final-texto`);

const sr8 = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3500,
  delay: 300,
  reset:true,
});
sr8.reveal(`.seccion-final-cards`);

//card
const sr9 = ScrollReveal({
  origin: "bottom",
  distance: "5px",
  duration: 4000,
  delay: 300,
  reset:true,
});
sr9.reveal(`.card`);
