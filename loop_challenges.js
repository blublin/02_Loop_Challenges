function printOddNums(){
    // Print odds 1-20
      console.log("Printing odd numbers, 1 through 20 inclusive");
      
      for (var i=0; i<21; i++) {
        if (i % 2) console.log(i);
      }
      
      console.log("Finished printing odd numbers\n\n")
    }
    
    function multiplesOf3(){
    // Decreasing Multiples of 3
      console.log("Printing multiples of 3, 100 decreasing to 0 inclusive");
      
      var i = 100;
      
      while (i > 0) {
        if (!(i % 3)) console.log(i);
        i--;
      }
      
      console.log("Finished printing multiples of 3\n\n");
    }
    
    function printSubtraction() {
    // Looping to continually subtract 1.5
      console.log("Printing values subtracted by 1.5.")
      
      var loopValue = 4;
      var subtractAmount = 1.5
      var loopTarget = -3.5;
      
      while (loopValue >= loopTarget) {
        console.log(loopValue);
        loopValue -= subtractAmount;
      }
      
      console.log("Finished printing subtractiong\n\n");
    }
    
    function sigma1To100() {
      // Add values 1 through 100
      console.log("Adding values 1 through 100 inclusive");
      
      var sum = 0;
      for (var i of Array(101).keys()) {
        sum += i;
      }
      
      console.log("Sum:", sum);
      console.log("Finished adding and printing the sum\n\n");
    }
    
    function product1To12() {
      // Multiply the values of 1 through 12
      console.log("Multiplying 1 through 12 inclusive");
      
      var product = 1;
      var max = 13;
      for (var i = 1; i < 13; i++) {
        product *= i;
      }
      
      console.log("Product:", product);
      console.log("Finished multiplying and printing the product")
    }
    
    printOddNums()
    multiplesOf3()
    printSubtraction()
    sigma1To100()
    product1To12()