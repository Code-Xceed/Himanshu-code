//a = b == assignment oprator
// let fullName = ("him")
//console.log(fullname) 

    //bollon value//

//isfollow = ("false")
//console.log(isfollow)
 
    //const//

 //variable cannot be redeclared. a block scope variable.

//const pI = 3.14
 //console.log(pI)
 
 //const product = { 
     
    //tital : "parkar jotter standerd ct ball pen (black)",
    //rating : 4,
    //price : 270,
    //offer : 5,}
 
   
 //console.log(product)


  //const shradhakhaprainsta =  {
    // username : "shradhakhapra", 
 // posts : 195,
  //followers : 569000,
 // following : 4  }

    //console.log(shradhakhaprainsta)

    
     //artimatic oprator// 

   // let a = 2
    // let b = 8

   //console.log(a+b)
 // console.log(a*b)


   //expnention oprator//

    //console.log(a**b) // 2^8
        
     /*unary oprator == incrising and decrising       incrisig == a++ == a+1 
        decrising == a-- == a-1

         //a++;
         //console.log(a)
         //a--; 
        // console.log(a)

        //asighnment oprator//
          
       // a += 4;  // a+4

       // console.log(a)
    
        //a *= 4; // a*4
         
        //console.log(a) 

        //let a = 4

       // console.log(a %= 4 ) // 0

        //compaison  oprator//

        //equal to// {==}                  not equal to {!=}
        // equal to and type// {===}       not equal to and type {!==}
         
       // let a = 6; let b = 8;
         
       // console.log(a==b) //false
        
      //  console.log(a!=b) // true

      //  console.log(a===b) //false

       // console.log(a!==b) //true

        //console.log(a<b)  //true
        
       // console.log(a<=b) // true

       //logical oprator//

        //let a = 4 , b = 5
       
        //let cond1 = a<b // true
        //let cond2 = a===4 // true

        // console.log(cond1&&cond2) // true
        
         //conditional statments//
         
          // let age = 19

          /* if(age>18){
            console.log("you can drive")
           }*/
         
            //let age = 16

           /* if (age >= 18){
               console.log("youcanvote") 
           } else {
               console.log("not vote " )
            }*/

            //odd and even num.

             /*let num = 3

             if (num%2===0) {
               console.log("even")
             }
             else{
               console.log("odd")
             }
              
             //else if//

      let age = 18

      if (age<18){
     console.log("juniour")
      } 
     else if (age>18){
    console.log("seniour")
      }
     else {
    console.log("middle")
       }*/

   /*ternary operators*/
      
   //condition? true output : false output//

    //let age = 15

    // age >= 18 ? console.log ("adult") :console.log("not adult")
   
  //   let num = prompt("enter a number")

  //   if (num%5 === 0)
   //  {
 //     console.log("is a num multiple of 5")
    // }
 //    else {
  //    console.log("is not a multiple of 5")
  //   }

   /*let score = prompt("enter a score")

   if (score>=90&&score<=100){
    console.log("A")
   }
       
   else if (score>=70&&score<=89){
    console.log("B")
   }
  
   else if(score>=60&&score<=69){
    console.log("C")
   }
   else if(score>=50&&score<=59){
    console.log("D")
   }
    
    else if (score>=0&&score<=49){
      console.log("F")
    }*/

   // for (let count = 1 ;count <=100 ; count++){
   //   console.log("jaya")
   // }        
     
    // let sum = 0;
     //for (let i = 1; i<=10; i++){
    //   sum=sum+i;
    // }
    // console.log(sum)

    /* let sum = 0
     for (i = 1 ; i <= 100; i++){
      sum = sum+i
     }
     console.log(sum)*/

     //for-of loop
    /* let str = "java script";

     for (let i of str)
     {
      console.log (i)
     }*/

     //for (let num = 0 ; num <= 100; num++){
     //   if (num%2 ===0)console.log(even)
     //   

     //practice qs

   // let gamenum = 16;

   // let usernum = prompt ("guess the user num:");
     
   //  while (usernum != gamenum){
//usernum=  prompt("you entered wrong number, guess again");
  //   }

     //  console.log("congrats ,you entered the right num");

     //let password = 16

    // let mobilepass = prompt("enter password")

   //  while(mobilepass!=password){
   //   mobilepass= prompt("you enter a wrong password")
   //  }

  //console.log("enter a right password")
   
    //for in loop//

//    let student = {
 //     name : "sharwan singh",
//      age : 19,
 //     cgpa : 7.7,
 //     ispass: true
      
 //   };

  //  for(let key in student){
 //     console.log("key=",key, "value", student[key]);
 //   }

  //template literals//=== a way to have enbedded expressions in string

  /*let obj = {
    item: "pen",
    price: 10,
  }
   let output = `the cost of ${obj.item} is ${obj.price}rupees`

   console.log(output)*/
  
   //  "\n== next line" //

   //console.log("jaya \n anshu")

  //"\t"== for space

   //console.log("jaya\tanshu")

  //trim //=== trim a spaces 

 // let str= "          apna collage   "

//console.log(str.trim())   //== apna collage

//let str = "012345678"

//console.log(str.slice(1,7))