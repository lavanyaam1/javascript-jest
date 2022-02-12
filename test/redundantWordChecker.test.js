const redundantWordChecker = require('../redundantWordChecker');

describe('Repeated Word Generator',function(){
    // Failure test cases
    it('should throw an error for any dataptype other than string',function(){
        const val = redundantWordChecker(123123,' ');
        expect(val).toStrictEqual('Invalid Datatype');
    });
    it('should throw an error for larger string',function(){
        const val = redundantWordChecker('asdfggtrewerrt uiuiuikjhkj kjhdkjkjh asdfggtrewerrt uiuiuikjhkj kjhdkjkjh    asdfggtrewerrt uiuiuikjhkj kjhdkjkjh   asdfggtrewerrt uiuiuikjhkj kjhdkjkjh    asdfggtrewerrt uiuiuikjhkj kjhdkjkjh#####asdfggtrewerrt uiuiuikjhkj kjhdkjkjhasdfggtrewerrt uiuiuikjhkj kjhdkjkjh',' ');
        expect(val).toStrictEqual('String length has to be less than or equal to 100');
    });
    it('should throw an error when delimiter is not specified',function(){
        const val = redundantWordChecker('Words words');
        expect(val).toStrictEqual('Enter the both string and a delimiter');
    });

    it('should throw an error when input string is not specified',function(){
        const val = redundantWordChecker('',' ');
        expect(val).toStrictEqual('Empty String not accepted');
    });
    it('should throw an error when both string and a delimiter not provided',function(){
        const val = redundantWordChecker();
        expect(val).toStrictEqual('Enter the both string and a delimiter');
    });

    // Succes test cases
    it('should return whether the words are repeated ',function(){
        const val = redundantWordChecker('These words are repeating words',' ');
        expect(val).toStrictEqual("String contains repeating words");
    });
    it('should return whether the words are not repeated ',function(){
        const val = redundantWordChecker('These words are not repeating',' ');
        expect(val).toStrictEqual("Strings does not contain repeating words");
    });
})