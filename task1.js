
//1Write a JavaScript program which iterates the integers from 1 to 100. But for
//multiples of three print "Fizz" instead of the number and for the multiples of five print
//"Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}

//2Write a JavaScript program to sum the multiples of 3 and 5 under 1000
 
function sum(){
  let sum=0
  for(x=1;x<1000;x++){
    if (x%3==0 || x%5==0){
      sum+=x
    }
  }
}


//3Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it wil

for (var y=0; y<20; y++){
    if (y === 0){
        console.log(y + "is even")

    }
    else if (y % 2 === 0){
        console.log(y + "is even")    
    }
    else{ 
        console.log(y + "is ood")

    }
}

4//Write a JavaScript conditional statement to find the largest of five numbers in the
//given array.

even_odd()  

        function largest_number(){
             let num=[-2,4,-5,6,0]
             max=Math.max.apply(null,num)
             console.log(max)
        }

//5. Using conditional statements, write a JavaScript program to find the largest of the
//following two numbers: 10 & 40
largest_number()
     
function ma_number(){
  a=10
  b=40
  if(a>b){
    console.log(a)
  }
  else{
    console.log(b)
  }
}

//6. Write a JavaScript program to find leap years from 2000 to 2022

max_number()  

        function leap_year(){
            for(year=2000;year<2022;year++){
                if(year%400==0  || year%4==0 && year%100!=0  ){
                    console.log(`${year} is a leap year`)  
                }
            }
        }

leap_year()   
 
 








