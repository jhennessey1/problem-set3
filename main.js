// Works for words or sentences

// var palindrome = function(string) {
// 	stringArray = string.split('')
// 	noSpaceString = []
// 	for(var i = 0; i < stringArray.length; i++) {
// 		if(stringArray[i] !== ' ') {
// 			noSpaceString.push(stringArray[i])
// 		}
// 	}
// 	newString = []
// 	for(var i = (noSpaceString.length-1); i >= 0; i--) {
// 		newString.push(noSpaceString[i])
// 	}

// 	if(newString.join('') === noSpaceString.join('')) {
// 		return true
// 	}
// 	else {
// 		return false
// 	}
// }


// var dashInsert = function(num) {
// 	var numArray = num.toString().split('')
// 	var newNumArray = []
// 	for(var i = 0; i < numArray.length; i++) {
// 		if(Number(numArray[i]) % 2 === 0) {
// 			newNumArray.push(numArray[i])
// 		}
// 		else if(Number(numArray[i]) % 2 !== 0 && Number(numArray[i - 1]) % 2 !== 0 && Number(numArray[i - 1] > 0)) {
// 			newNumArray.push('-')
// 			newNumArray.push(numArray[i])
// 		}
// 		else {
// 			newNumArray.push(numArray[i])
// 		}
// 	}
// 	return newNumArray.join('')
// }






