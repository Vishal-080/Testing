var storage = require('./storage');

describe('Convert storage', function(){ 
    test('should convert', function(){ 
        expect(storage(500,"kb")).toBe('0.5 mb');
    });
    test('should convert', function(){ 
        expect(storage(10,"mb")).toBe('0.01 gb');
    });
    test('should convert', function(){ 
        expect(storage(300,"kb")).toBe('0.3 mb');
    });
    test('should convert', function(){ 
        expect(storage(800,"mb")).toBe('0.8 gb');
    });
    test('should convert', function(){ 
        expect(storage(900,"gb")).toBe('0.9 tb');
    });

})