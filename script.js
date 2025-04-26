// complete the given function

function palindrome(str){

	let clean = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
		
	return clean === clean.split('').reverse().join('');
}
module.exports = palindrome
