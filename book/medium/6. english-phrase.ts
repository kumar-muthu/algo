const words = (n) => {
    const ones = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine '];
    const elevens = ['', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen ']
    const tens = ['', 'Ten ', 'Twenty ', 'Thirty ', 'Forty ', 'Fifty ', 'Sixty ', 'Seventy ', 'Eighty ', 'Ninety ']
    const hundreds = ['', 'Hundred ', 'Thousand']

    let l = n.toString().length;
    if (l > 3) {
        return `${words(Math.floor(n / 1000))} Thousand ${words(n % 1000)}`;
    } else if (l > 2) {
        return `${words(Math.floor(n / 100))} Hundred ${words(n % 100)}`;
    } else if (l >= 1) {
        if (n > 10 && n < 20) {
            return elevens[n % 10];
        } else if (n < 10) {
            return ones[n];
        } else if (n % 10 === 0) {
            return tens[n / 10];
        } else {
            return words(Math.floor(n / 10) * 10) + ' ' + words(Math.floor(n / 10));
        }
    }
}



console.log(words(999980));