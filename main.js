// Here is an array for cat names
const cats = ['fluffy', 'spike', 'ace', 'ike'];
console.log('1st cat', cats[0]);


// Split
const favoriteAnimal = 'cow,bear,dog,cat';
const favoriteAnimalArray = favoriteAnimal.split(','); //['cow', 'bear', 'dog', 'cat']
console.log('favoriteAnimalArray', favoriteAnimalArray);

// Join
const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('');
console.log('newNum', newNum); //12345

//mini challenge: function that tells you if it is a palindrome...??

const palChecker = (word) => {
    const wordArray = word.split('').join('');
    const reverseArray = word.split('').reverse().join('');

    if(wordArray === reverseArray){
        console.log('yes');
    } else {
        console.log('no');
    }
};


palChecker('mom'); //yes
palChecker('racecar'); //yes
palChecker('marshall'); //no