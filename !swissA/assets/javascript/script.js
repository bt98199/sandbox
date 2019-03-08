$(document).ready(function() {




document.write("<p>Table of Fibonacci Numbers</p>");
for (i=0, j=1,k=0, fib = 0; i<10; i++, fib = j+k, j=k, k=fib) {
    document.write("Fibonacci (" + i + ") = " + fib);
    document.write("<br>");
}





































});