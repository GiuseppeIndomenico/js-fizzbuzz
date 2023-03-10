/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/




for (let i = 1 ; i<= 100; i++){

    if ( i % 92 === 0) {

       
        
        document.getElementById("cont-box").innerHTML +=

        `
        <div class="box d-flex align-items-center justify-content-center bg-danger fw-bold ">
        
        <img class="img-fluid" src="./img/mobile-logo.png" alt="">
        
        </div>
    
        `


        
        
    }

   else if ( i % 5 === 0 && i % 3 === 0 ) {

       
        
        document.getElementById("cont-box").innerHTML +=

        `
        <div class="box d-flex align-items-center justify-content-center bg-danger fw-bold ">
        
        Fizzbuzz
        
        </div>
    
        `


        
        
    }
  else if ( i % 5 === 0  ) {

       
        
        document.getElementById("cont-box").innerHTML +=

        `
        <div class="box d-flex align-items-center justify-content-center bg-warning fw-bold rounded-1  ">
        
        buzz
        
        </div>
    
        `


        
        
    }
  else if ( i % 3 === 0  ) {      
        
        document.getElementById("cont-box").innerHTML +=

        `
        <div class="box d-flex align-items-center justify-content-center fizz fw-bold rounded-1 ">
        
        fizz
        
        </div>
    
        `


        
        
    }
  else {
        
      //  console.log (i)
        document.getElementById("cont-box").innerHTML +=
        
        `
        <div class="box d-flex align-items-center justify-content-center bg-info fw-bold rounded-1 ">
        
        ${i}
        </div>
        
        `
    }

}