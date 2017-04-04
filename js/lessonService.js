angular.module('directivePractice').service('lessonService',function(){

    this.getSchedule = function($http){
      return $http.get('schedule.json');

    }
  })
