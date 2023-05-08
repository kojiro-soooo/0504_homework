// 1. Write a JavaScript function that reverse a number.
function reverse(num){
    var newNum =String(num).split('')
    var l = 0;
    var r = newNum.length-1;
    while (l<r){
        temp = newNum[l]
        newNum[l] = newNum[r]
        newNum[r] = temp
        l+=1
        r-=1
    };
    return newNum.join('')
}
console.log("#1: ", reverse(32243))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
function palindromeCheck(str){
    var l = 0;
    var r = str.length-1;

    while (l<r){
        if (str[l] == str[r]){
            l +=1
            r-=1
            continue
        } else {
            return false
        }
    } return true 

}
console.log("#2: ", palindromeCheck("madam")) //true
console.log("#2: ", palindromeCheck("nurses run")) //false

// 3. Write a JavaScript function that generates all combinations of a string.
function combinations(str){
    strCombinations = [];
    for (let i=0; i<str.length; i++){
        for (let j=i+1; j<str.length+1; j++){
            strCombinations.push(str.slice(i, j))
        }
    }
    return strCombinations;
}
console.log("#3: ", combinations("dog"))

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function alphabetize(str){
    return str.split('').sort().join('')
}
console.log("#4: ", alphabetize("webmaster"))

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string
function capitalize(str){
    var newString = str.split(" ")
    for (let i=0; i<newString.length; i++){
        newString[i] = newString[i][0].toUpperCase() + newString[i].substr(1);
    }
    return newString.join(" ");
}
console.log("#5: ", capitalize("the quick brown fox"))

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestWord(str){
    var newString = str.split(" ")
    var longest = new Array("");

    for (let i=0; i<newString.length; i++){
        if (newString[i].length > longest[0].length){
            longest[0] = (newString[i])
        } else {continue}
    }
    return longest[0];
}
console.log("#6 ", longestWord("Web Development Tutorial"))

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowelCounter(str){
    var vowels = "aeiouAEIOU";
    var counter = 0;

    for (let i=0; i<str.length; i++){
        if (vowels.indexOf(str[i]) != -1 ){
            counter +=1
        } else {
            continue
        }}
    return counter;
}
console.log("#7: ", vowelCounter("The quick brown fox"))

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function primeCheck(num){
    if (num < 1){
        return false
    } else{
        for (let i=2; i<num; i++){
            if (num % i == 0){
                return false;
            }
        return true;
    }
}}
console.log("#8: ", primeCheck(7)) // true
console.log("#8: ", primeCheck(4)) // false

// 9. Write a JavaScript function which accepts an argument and returns the type.
function typeCheck(val){
    return typeof(val);
}
console.log("#9: ", typeCheck(8))
console.log("#9: ",typeCheck(true))
console.log("#9: ",typeCheck("hello"))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(num){
    for (let i=0; i < num; i++){
        for (let j=0; j < num; j++){
            if (i === j){ 
                 console.log(' 1 ');
            } else {
                console.log(' 0 ');}
            }
             console.log('----------');
           }
}
identityMatrix(4);

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function second(arr){
    var sortedArray = arr.sort();
    return [sortedArray[1], sortedArray[sortedArray.length-2]]
}
console.log("#11: ", second([1,2,3,4,5]))

// 12. Write a JavaScript function which says whether a number is perfect.
function positive(num){
    var sum = 0
    for (let i=0; i<num; i++){
        if(num%i==0){
            sum+=i;
        }
    }
    if(sum==num){
        return true
    } else{
        return false
    }
}
console.log("#12: ", positive(6))
console.log("#12: ", positive(28))
console.log("#12: ", positive(496))
console.log("#12: ", positive(8))

// 13. Write a JavaScript function to compute the factors of a positive integer.
function factors(num){
    var newArray = new Array();
    for (let i=0; i<num; i++){
        if(num%i==0){
            newArray.push(i)
        }
    }
    return newArray;
}
console.log("#13: ", factors(6))

// 14. Write a JavaScript function to convert an amount to coins.
function coinConverter(amount, coins){
    if (amount==0){
        return [];
    } else {
        if (amount >= coins[0]){
            left = (amount - coins[0]);
            return [coins[0]].concat(coinConverter(left, coins));
        } else {
            coins.shift();
            return coinConverter(amount, coins);
        }
    }
}
console.log("#14: ", coinConverter(78, [25,10,5,2,1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function exponential(b, n){
    res = 1
    for (let i=0; i!=n; i++){
        res = res * b
    }
    return res
}
console.log("#15: ", exponential(2, 3)) //8

// 16. Write a JavaScript function to extract unique characters from a string.
function uniqueCharacters(str){
    var hashmap = new Map();
    var newString = str.split("");
    var res = "";

    for (let i=0; i<newString.length; i++){
        hashmap.set(newString[i], (hashmap.get(newString[i]) ?? 0) +1)
        if(hashmap.get(newString[i]) === 1){
            res+=newString[i]
        }
    }
    return res;
}
console.log("#16: ", uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"))

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function letterCount(str){
    var newString = str.split(" ").join("")
    var hashmap = new Map();

    for (let i=0; i<newString.length; i++){
        hashmap.set(newString[i], (hashmap.get(newString[i])?? 0)+1)
    }
    return hashmap;
}
console.log("#17: ", letterCount("the apple ate the banana"))

// 18. Write a function for searching JavaScript arrays with a binary search.
function binarySearch(arr, target){
    let l = 0;
    let r = arr.length-1;

    while (l <= r){
        const middle = Math.floor((l+r)/2);
        const potentialMatch = arr[middle];
        if(target === potentialMatch) {
            return middle;
        } else if (target < potentialMatch){
            r = middle-1;
        } else {
            l = middle+1;
        }
    }
    return false;
}
console.log("#18: target is at index", binarySearch([1,2,3,4,5,6], 5))

// 19. Write a JavaScript function that returns array elements larger than a number.
function largerThan(arr, target){
    var new_array = new Array()
    for (let i=0; i<arr.length; i++){
        if (arr[i] > target){
            new_array.push(arr[i])
        }
    }
    return new_array;
}
console.log("#19: ", largerThan([1,2,3,4,5,6], 3))

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
function stringGenerator(num){
    var res = "";
    var possible_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i=0; i<num; i++){
        res += possible_chars.charAt(Math.floor(Math.random()*possible_chars.length));
    }
    return res;
}
console.log("#20: ", stringGenerator(10));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
function subsetCombinations(a, min) {
    function helper(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            helper(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    for (var i = min; i < a.length; i++) {
        helper(i, a, [], all);
    }
    all.push(a);
    return all;
}
console.log("#21: ", subsetCombinations([1,2,3], 2))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function letterCounter(str, char){
    res = 0;

    for (let i=0; i<str.length; i++){
        if(str[i] == char){
            res+=1
        }
    }
    return res;
}
console.log("#22: ", letterCounter("microsoft.com", "o"))

// 23. Write a JavaScript function to find the first not repeated character.
function firstUnique(str){
    var hashmap = new Map()
    for (let i=0; i<str.length; i++){
        hashmap.set(str[i], (hashmap.get(str[i])??0)+1)
    }
    for ([key, value] of hashmap){
        if (value === 1){
            return key;
        }
    }
}
console.log("#23: ", firstUnique("abacddbec", "e"))

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
function bubblesort(arr){
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  };
console.log("#24: ", bubblesort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function longestCountryName(arr){
    var hashmap = new Map();

    for (let i = 0; i<arr.length; i++){
        hashmap.set(arr[i], arr[i].length)
    }

    return [...hashmap.entries()].reduce((a, e) => e[1]>a[1]? e: a)
}
console.log("#25: ", longestCountryName(["Australia", "Germany", "United States of America"]))

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestSubstring(str){
    var longest = 0;
    var start = 0;
    var seen = {};
    
    for (let i=0; i<str.length; i++){
        let char = str[i]
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        seen[char] = i+1;
        longest = Math.max(longest, i-start +1);
    }
    return longest;
}
console.log("#26: ", longestSubstring("abcdefggggabc"))

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
function longestPalindrome(str) {
    var longest = '';
    function findLongestPalindrome(s, i ,j){
        while(i >= 0 && j < s.length && s[i] === s[j]) {
            i -= 1;
            j += 1;
        }
        // slice the qualified substring from the second last iteration
        return s.slice(i + 1, j);
    }
    for (let i = 0; i < str.length; i++) {
        // palindrome can center around 1 or 2 letters
        const current1 = findLongestPalindrome(str, i, i);
        const current2 = findLongestPalindrome(str, i, i + 1);
        const longerPalindrome = 
              current1.length > current2.length ? current1 : current2;
        if (longerPalindrome.length > longest.length) {
            longest = longerPalindrome;
        } 
    }
    return longest;
};
console.log("#27: ", longestPalindrome("bananas"))

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function cbAcceptor(cb){
    cb();  
}
function callbackFunction() {
    console.log("#28: ", 'I\'m a callback function');
}
cbAcceptor(callbackFunction);

// 29. Write a JavaScript function to get the function name.
function someFunction(){
    return arguments.callee.name;
}
console.log("#29: ", someFunction())