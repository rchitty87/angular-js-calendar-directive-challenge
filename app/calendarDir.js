angular.module('calendarDemoApp').directive('calendar', function(months, days){
  return {
      restrict: 'E',
      templateUrl: 'calendar.html',
      link: function(scope, element, attrs){
        var startYear = attrs['startYear'];
        var endYear = attrs['endYear'];
        var years = [];

        for(var i = startYear; i <= endYear; ++i)
          years.push(i);

        scope.years = years;
        scope.months = angular.copy(months);
        scope.days = angular.copy(days);
      },
      controller: function($scope, $element, $attrs){
          var currDate = new Date();
          $scope.currMonth = currDate.getMonth();
          $scope.currYear = currDate.getFullYear();

          $scope.getCalendar = function(year, month){
            $scope.range = CalendarRange.getMonthlyRange(new Date(year, month));

            for(iDay in $scope.range.days){
                if($scope.range.days[iDay].month != $scope.currMonth)
                  $scope.range.days[iDay].class = 'invalidMonth';
            }
          }

          $scope.getCalendar($scope.currYear, $scope.currMonth);

          $scope.renderCalendar = function(){
            currDate.setMonth($scope.currMonth);
            currDate.setYear($scope.currYear);
            $scope.getCalendar($scope.currYear, $scope.currMonth);
          };
      }
  }
});
