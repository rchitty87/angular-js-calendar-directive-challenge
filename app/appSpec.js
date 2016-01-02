describe('test calendar',function(){
	var scope, element, compiled, html, text;

  beforeEach(module("calendarDemoApp"));
	beforeEach(module('calendar.html'));

	beforeEach(inject(function($rootScope, $compile){
		html="<calendar start-year='2000' end-year='2050'></calendar>";
    scope = $rootScope.$new();
		compiled = $compile(html)
		element = compiled(scope);
		scope.$digest();
	}));

  it('should render the calendar correctly', function(){
		expect(element.find('select').length).toBe(2);
    expect(element.find('#month option').length).toBe(12);
		expect(element.find('#year option').length).toBe(51);
		expect(scope.currYear).toBe(2016);
		expect(scope.currMonth).toBe(0);
		expect(element.find('.day span').length).toBe(scope.range.days.length);
	});

	it('should change the calendar to correctly month/year',function() {
	  expect(scope.range.days.length).toBe(42);
		expect(element.find('.day span').length).toBe(42);

    scope.getCalendar(2015, 2); //March 2015
    scope.$digest();

    expect(scope.range.days.length).toBe(35);
    expect(element.find('.day span').length).toBe(35);
	});
});
