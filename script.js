function exam() {
  /* Fordítsd meg a sorrendjét egy tömb elemeinek 
  function solution(str) {
    return str.split('').reverse().join('');
  }
  */

  /* Rendezd emelkedő sorrendbe a számokat egy tömbön belül
  */

  /* Add össze az összes számot egy tömbben
  */

  /* Számoljunk el nullától egy paraméterként kapott tetszőleges számig
  */

  /* Nézd meg egy paraméterként érkező tömb hosszát
  */

  /* Ellenőrizd le, hogy egy paraméterként kapott szám két másik számmal osztható-e
  */

  /* Rendezd egy tömbben a string-eket ABC sorrendbe
  */

  /* Vágd le egy string utolsó négy karakterét 
  */


  /* Mi különbség a === a == és a = között? 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

  Az =-ség jel csak ertekado, a ==-ség jel az egyenlőséget kikényszeriti a kiértékelés előtt pl: 1 = "1" a ===-ség jel az teljesen egyenlőséget keres tehát 1 = "1" nem igaz, mert 1 = number, pedig "1" = string
  */

  /* Mi a különbség a var, let és const között?
  A const(block scope)-tal egy állandót hozunk létre ami nem változtatható, a var-ral és a let-tel pedig változót hozunk létre, ami adott esetben változtatható. A var(function scope) és a let(block scope) között az a különbség, hogy a let csak a blockban értelmezhető/látszik, ahol létre hoztuk. A var ezzel ellentétben blokkon kivül is látszik kivülről befelé.
  pl:
  function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    let baz = "Bazz";
    console.log(baz); // Bazz
  }

  console.log(baz); // ReferenceError
}

run();
  */

  /* Mi a kulonbseg a global, functional és block scope?
  https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var

    A global scope a szulo es a functional es block scope a gyerekek amelyek egyenlo hataskoruek es melle rendeltsegi viszonyban vannak, mig a global scope-pal ala rendeltsegi viszonyban allnak.
  */

  /* Üres tömb egyenlő-e üres tömbbel? 
    Nem lehet egyenlő, mert az üres tömb mindig másik=uj/new tömbként jön létre. Array=tömb
    A tomb referencia tipusu valtozokat hoz letre igy ezek nem egyezhetnek.
  */
  
};
window.addEventListener("load", exam);