new Set([1, 1, 2, 2, 3, 4]) // {1,2,3,4}



[...new Set("referee")].join("") // 'ref'



let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// {array(3): true}
// {array(3): false}


const hasDuplicate = new Set(arr).size !== arr.length;

function isVowel(char) {
    return "aeiou".includes(char)
}

function vowelCount(w) {
    const vowelMap = new Map();
    for (let char of w) {
        if (isVowel(char)) {
            if (vowelMap.has(char)) {
                vowelMap.set(char, vowelMap.get(char) + 1)
            } else {
                vowelMap.set(char, 1)
            }
        }
    }
    return vowelMap;
}