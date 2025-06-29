let word = 'USA';

var detectCapitalUse = function(word) {
    
    if (/^[A-Z][^A-Z]*$/.test(word) || /^[A-Z]+$/.test(word) || /^[a-z]+$/.test(word)) {
        return true;
    }
    return false;
};

detectCapitalUse(word);