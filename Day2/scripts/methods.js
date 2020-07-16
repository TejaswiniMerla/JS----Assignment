//Javascript String Methods

//String Length : The length property returns the length of a string.

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length);

/* Finding a String in a String : The indexOf() method returns the index of (the position of) 
   the first occurrence of a specified text in a string.

   The lastIndexOf() method returns the index of the last occurrence of a specified 
   text in a string. */

var str = "Please locate where 'locate' occurs!"
console.log(str.indexOf("locate"));
console.log(str.lastIndexOf("locate"));

//Both indexOf(), and lastIndexOf() return -1 if the text is not found.

console.log(str.indexOf("teju"));

//Both methods accept a second parameter as the starting position for the search.

var str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate",15));

//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

var str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate", 15));

//Searching for a String in a String : The search() method searches a string for a specified value and returns the position of the match.

var str = "Please locate where 'locate' occurs!";
console.log((str.search("locate")));

/*Extracting String Parts : There are 3 methods for extracting a part of a string:
                            . slice(start, end)
                            . substring(start, end)
                            . substr(start, length)*/

/*The slice() Method : slice() extracts a part of a string and returns the extracted part in a new string.
                       The method takes 2 parameters: the start position, and the end position (end not included).*/

var str = "Apple, Banana, Kiwi";
console.log(str.slice(-12, -6));

/*The substring() Method : substring() is similar to slice().
                           The difference is that substring() cannot accept negative indexes.*/

var str = "Apple, Banana, Kiwi";
console.log(str.substring(7));

/*The substr() Method : substr() is similar to slice(). The difference is that the second parameter specifies 
                        the length of the extracted part.*/

var str = "Apple, Banana, Kiwi";
console.log(str.substr(15, 6));

/*Replacing String Content : The replace() method replaces a specified value with another value in a string.
                             By default, the replace() method replaces only the first match.*/

str = "Please visit Microsoft and Microsoft!";
console.log(str.replace("Microsoft", "W3Schools"))

/*Converting to Upper and Lower Case : A string is converted to upper case with toUpperCase().
                                       A string is converted to lower case with toLowerCase().*/

var text1 = "Hello World!";     
var text2 = text1.toUpperCase();
console.log(text2);

var text1 = "Hello World!";     
var text2 = text1.toLowerCase();
console.log(text2);

//The concat() Method : concat() joins two or more strings.

var text1 = "Hello";
var text2 = "World";
console.log(text1.concat(" ", text2));

//String.trim() : The trim() method removes whitespace from both sides of a string.

var str = "       Hello World!        ";
console.log(str.trim());

/*Extracting String Characters : There are 3 methods for extracting string characters:
                                 . charAt(position)
                                 . charCodeAt(position)
                                 . Property access [ ] */

//The charAt() Method :  The charAt() method returns the character at a specified index (position) in a string.                           

var str = "HELLO WORLD";
console.log(str.charAt(0)); 

/*The charCodeAt() Method : The charCodeAt() method returns the unicode of the character at a specified index in a string.
                            The method returns a UTF-16 code (an integer between 0 and 65535).*/

var str = "HELLO WORLD";
console.log(str.charCodeAt(0)); 

//Property Access : ECMAScript 5 (2009) allows property access [ ] on strings

var str = "HELLO WORLD";
console.log(str[0]); 

//Converting a String to an Array : A string can be converted to an array with the split() method.

var txt = "Hello";       
console.log(txt.split(""));   



//Javascript Array Methods

//Converting Arrays to Strings : The JavaScript method toString() converts an array to a string of (comma separated) array values.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

/*The join() method also joins all array elements into a string.It behaves just like toString(), 
but in addition you can specify the separator.*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));

//Popping and Pushing : Popping items out of an array, or pushing items into an array.

//Popping : The pop() method removes the last element from an array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);

//Pushing : The push() method adds a new element to an array (at the end).

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

/*Shifting Elements : Shifting is equivalent to popping, working on the first element instead of the last.
                      The shift() method removes the first array element and "shifts" all other elements to a lower index.*/

//The shift() method returns the string that was "shifted out".

var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.shift()
console.log(fruits);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); 
console.log(fruits);

//Changing Elements : Array elements are accessed using their index number.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
console.log(fruits);

//The length property provides an easy way to append a new element to an array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
console.log(fruits);

//Deleting Elements : Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; 
console.log(fruits);

//Splicing an Array : The splice() method can be used to add new items to an array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//Merging (Concatenating) Arrays : The concat() method creates a new array by merging (concatenating) existing arrays:

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//Slicing an Array : The slice() method slices out a piece of an array into a new array.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus);

//Automatic toString() : JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

//Finding Max and Min Values in an Array : There are no built-in functions for finding the highest or lowest value in a JavaScript array.
