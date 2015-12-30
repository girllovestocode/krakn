describe('estimate an interior room', function(){

    beforeEach(function(){
        browser.get('/interiors');
        var widthFeet = element(by.model('room.widthFeet'));
        var heightFeet = element(by.model('room.heightFeet'));
        var area = element(by.model('area'));
        var paint = element(by.model('paint'));

    });

    it('calculate area of a room', function(){
        widthFeet.sendKeys(4);
        heightFeet.sendKeys(5);
        expect(area).toEqual(20);
    });

    it('calculate paint requirement of a room', function(){
        //350 sqft per gallon
        widthFeet.sendKeys(5);
        heightFeet.sendKeys(70);
        expect(paint).toEqual(1.00);
    });


});