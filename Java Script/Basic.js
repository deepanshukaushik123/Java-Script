
console.clear();
                  //case - 1
                var num = 10;
                var num2 = 20;
                var num3 = 100;
                var sum = num+num2+num3;
                console.log(sum);
              
                //Case - 2
                var firstName = "Deepanshu"
                var lastName = "Kaushik"
                console.log(firstName +lastName);
                console.log(lastName)
        
                //Case - 3
                var abc = 10;
                var xyz = 10.56;
        
                console.log(typeof(abc));
                console.log(typeof(xyz));
                console.log(typeof(firstName));
                console.log(typeof(sum));
        
                //Case - 4
                var add = num+num2
                var sub = num-num2
                var mul = num*num2
                var div = num/num2
        
                console.log(add)
                console.log(sub)
                console.log(mul)
                console.log(div)
        
                //Case - 5
                
                //toString() number as input and returns a string
                console.log(num.toString())
                console.log(num2.toString())

                console.log(typeof(num))
                console.log(typeof(num2))

                //parseInt() string numeral as input and returns a number

                var strNum1 = "abc"; //This will print Nan
                var strNum2 = "11.5";
                var strNum3 = "abc";
                
                console.log(parseInt(strNum1))
                console.log(parseInt(strNum2))
                console.log(parseInt(strNum3))

                //parseFloat() string numeral as an input and returns as a floating number
                console.log(parseFloat(strNum2))

                //toFixed() takes floating number and round it of to given position
                var strFloat = 99.59985764621
                console.log(strFloat.toFixed())
                

                //Case - 6

                var myFirstString = "I love JavaScript "

                console.log(typeof(myFirstString))

                var mySecondString = 'We will learn JavaScript together'
                console.log(typeof(mySecondString))

                //What if my string contains a double quote
                var doubleQuotesString = "This is a \"JavaScript\" string"
                console.log(doubleQuotesString)

                //What if my string contains a single quote
                var singleQuotesString = 'This is a \'JavaScript\' string'
                console.log(singleQuotesString)

                var doubleQuotesString2 = "This is a 'JavaScript' string"
                var singleQuotesString2 = 'This is a "JavaScript" String'
                console.log(doubleQuotesString2)
                console.log(singleQuotesString2)

                //Case - 7
                //To cheak the length of String
                console.log(myFirstString.length)

                //Find index of a string inside another string
                console.log(myFirstString.indexOf('JavaScript'))
                console.log(myFirstString.indexOf("I"))

                //Find last index of a string inside another string
                console.log(myFirstString.lastIndexOf('JavaScript'))
                document.write(myFirstString)
                
                // Get a part of our start slice(start, end)
                console.log(myFirstString.slice(0, 8))
                console.log(myFirstString.slice()) //without any parameter
                console.log(myFirstString.slice(-11))

                // Get sub string function - substr(startPos, length)
                console.log(myFirstString.substr(0, 6))
                