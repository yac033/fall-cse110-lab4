1. it will print 3 because i is declear by using 'var' which can be access outside of the for loop
2. will print 150 because var doesn't care about being declear mutiple times
3. will print 150 because Math.round(150 * 100)=15000 / 100 = 150
4. [50, 100 150] it loop the prices array and mutiple with 0.5 the number times it with 100 and put it through the round function (which it doesn't change anything because all the number is a whole number) divided it by 100 which just give us the price * 0.5 and then push the number indiviually to the end of the discounted array.
5. error because i only decleared in for loop can't access it outside of the for loop
6. error because discountedPrice only decleared in for loop can't access it outside of the for loop
7. [50, 100 150] it loop the prices array and mutiple with 0.5 the number times it with 100 and put it through the round function (which it doesn't change anything because all the number is a whole number) divided it by 100 which just give us the price * 0.5 and then push the number indiviually to the end of the discounted array. and since line 14 is in the same block as let so the line can run normally
8. error because discounted price is being declear mutiple time syntext error
9. error because i only decleared in for loop can't access it outside of the for loop
10. 3 because line 12 is in the same block as the length being declear
11. [50, 50, 50] because the discountedPrice is const and the first time when it got declear is 100 * (0.5) which is 50 and it push into the discounted array 3 times
12A. student.name;
12B. student["Grad Year"];
12C. student.greeting();
12D. student["Favorite Teacher"].name;
12E. student["courseLoad"][0];
13A. '32' because 2 is mapped to '2' and '3' + '2' = '32'
13B. 1 because '3' mapped to 3 (in interger) 3 - 2 = 1
13C. 3 because null is 0 (in interger) 3 + 0 = 3
13D. '3null' null mapped to 'null' '3' + 'null' = '3null'
13E. 4 true is 1 (in interger) 1 + 3 = 4
13F. 0 because false is 0 (in int) null is 0 (in int) 0 + 0 = 0
13G. '3undefined' underfined mapped to 'undefined' '3' + 'undefined' = '3undefined'
13H. NaN 3 converted to int undefined is NaN 3 - NaN = NaN
14A. True '2' become int 2 > 1
14B. False because when comparing string the only matter is the first charater in this case it will be '2'< '1' -> 2 < 1 is False
14C. True '2' == '2' or 2 == 2 both cases it will return true
14D. 2 is not strictly equal to '2'
14E. false because true is 1 in int 1 is not equal to 2
14F. true Bollean(2) is equal to true true == true is true
15. == will convert the type if not match and compared the converted value but === strictly equal which mean it doesn't convert the type
17. After called passing the array [1,2,3] to the function modifyArray we also passed function doSomething as callback in line 2 created newArr array and in the for loop in line 3 we pushing the number that get returned by callback function the first time in the for loop i = 0 array[0] is number 1, 1 pass into the callback function which is the doSomething function take the number 1 as 'num' return num * 2 which is 2. 2 push into the newArr samething happen to array[1] which result in 4 push into the newArray and last 3 which return 6 and push into newArr. after the for loop newArr which contain [2,4,6] get returned.
18. 