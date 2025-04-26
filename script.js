// complete the given function

function palindrome(str){
	let strrev = [...str].split("").reverse();

	if(str = strrev){
		return true
	}
	else{
		return false
	}

}
module.exports = palindrome
