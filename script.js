function _load() {

  // 1. Fordítsd meg a sorrendjét egy tömb elemeinek
  
  let numbers = [1, 2, 10, 30, 4];
    console.log(numbers.reverse());
  function sequence(numbers){ 
    let x =  numbers.reverse();
    return x;
  }
  console.log(sequence(numbers));
  

  /* 2. Rendezd emelkedő sorrendbe a számokat egy tömbön belül
  */
  let mainArray = [5,17,4,82,29,100,13,1,0,20,68,33,72,9];
  
  mainArray.sort(function(firstElement, secondElement) {
    return firstElement - secondElement;
  });

  console.log(mainArray);

  //backwards 
  mainArray.sort(function(firstElement, secondElement) {
    return secondElement - firstElement;
  });
  console.log(mainArray); 

  
  // 2. Add össze az összes számot egy tömbben
    
  let numberArray = [1, 11, 111, 2, 22, 222];

  let sumArray = numberArray.reduce((previousValue, currentValue) => previousValue + currentValue);
  console.log(sumArray);
  
  
  /* 3. Számoljunk el nullától egy paraméterként kapott tetszőleges számig
  */
   
  let anyNumber = 5;
  for (let i = 0; i <= anyNumber; i++) {
    console.log(i);   
  }
  

  //Dorina megoldasa 
  function Count(n) {
    for (let i = 0; i <= n ; i++){
      console.log(i);
    }
  }
  Count(5);
 


  //4. Nézd meg egy paraméterként érkező tömb hosszát
  
  let anyArray = ["duck", "dog", false, "cat", "mouse", true, "elephant", 8, "cicken", null];
  
  function arrayLength(arr) {
    return arr.length;
  }

  let arrayElementNumber = arrayLength(anyArray);
  
  console.log(arrayElementNumber);
  
  
  /* 5. Ellenőrizd le, hogy egy paraméterként kapott szám két másik számmal osztható-e
  */

   console.log(anyNumber);
  
  for (let index = 1; index < anyNumber; index++) {

    if(index % 3 === 0){
      console.log("true"); 
    } else if(index % 5 === 0) {
      console.log("true"); 
    }
  } 
  

  /* 6. Rendezd egy tömbben a string-eket ABC sorrendbe
  */
  
  let arrayFruits = ["Lemon", "Clementine", "Avocado", "Papaya", "Grapes", "Tomato", "Pear", "Kiwi", "Strawberry"];
  //console.log(arrayFruits);


  function myFunction(x) {
    let sortedArrayFruits = arrayFruits.sort();
    console.log(sortedArrayFruits);
  }
  myFunction();




  /* 7. Vágd le egy string utolsó négy karakterét 
  */
  let longString = "Understanding";
  longString = longString.slice(0, -4); 
  console.log(longString);
    
  //VAGY

  let string = 'Running_from_the_hell';
  string = string.slice(0, -4);
  console.log(string); 
  
  

  /* 1. Mi különbség a === a == és a = között? 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

   - Az =-ség jel csak ertekado, a ==-ség jel az egyenlőséget kikényszeriti a kiértékelés előtt pl: 1 = "1" a ===-ség jel az teljesen egyenlőséget keres tehát 1 = "1" nem igaz, mert 1 = number, pedig "1" = string
  */

  /* 2. Mi a különbség a var, let és const között?
   - A const(block scope)-tal egy állandót hozunk létre ami nem változtatható, a var-ral és a let-tel pedig változót hozunk létre, ami adott esetben változtatható. A var(function scope) és a let(block scope) között az a különbség, hogy a let csak a blockban értelmezhető/látszik, ahol létre hoztuk. A var ezzel ellentétben blokkon kivül is látszik kivülről befelé.
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

  /* 3. Mi a kulonbseg a global, functional és block scope?
    https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var

    - A global scope a szulo es a functional es block scope a gyerekek amelyek egyenlo hataskoruek es melle rendeltsegi viszonyban vannak, mig a global scope-pal ala rendeltsegi viszonyban allnak.
  */

  /* 4. Üres tömb egyenlő-e üres tömbbel? 
    Nem lehet egyenlő, mert az üres tömb mindig másik=uj/new tömbként jön létre. Array=tömb
    A tomb referencia tipusu valtozokat hoz letre igy ezek nem egyezhetnek.
  */
  
};
window.addEventListener("load", _load);