
const generatePassword = (length = 12, t) => {
	let charset = "!#$%&123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz";

	if (t === 'u')
		charset = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
	else if (t === 'l')
		charset = 'abcdefghkmnpqrstuvwxyz';
	else if (t === 'a')
		charset = 'ABCDEFGHKMNPQRSTUVWXYZabcdefghkmnpqrstuvwxyz';
	else if (t === 'x')
		charset = '123456789ABCDEFGHKMNPQRSTUVWXYZ';
	else if (t === 'y')
		charset = '123456789abcdefghkmnpqrstuvwxyz';
	else if (t === 'n')
		charset = '123456789';
	else if (t === 'p') // any printable char (ASCII subset)
		charset = '!"#$%&()*+,-./123456789:;<=>?@ABCDEFGHJKLMNPQRSTUVWXYZ[]^_`abcdefghjklmnpqrstuvwxyz{|}~';
	else if (t === 'r') // any printable char (ASCII subset) (useful mode)
		charset = '!#$%&()*123456789+/<=>?@{}[]ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz';
	else if (t === 'c') // any NON-alphanumeric characters
		charset = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
	else if (t === 'e') // any NON-alphanumeric characters (useful mode)
		charset = '!#$%&()*+/<=>?@{}[]';
	else if (t === 'b') // any non-alpha characters
		charset = '!"#$%&()*+,-./123456789:;<=>?@[]^_`{|}~';
	else if (t === 'd') // then -- any non-alpha characters (useful mode)
		charset = '!#$%&()*123456789+/<=>?@{}[]';
	else if (t === 'z') // recomended for password generation characters
		charset = '-*@#';

	let retVal = "";

	for (let i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}

	return retVal;
}