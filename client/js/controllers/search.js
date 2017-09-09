angular
    .module('SearchCtrl', [])
    .controller('SearchController', function($scope, SearchService) {

        $scope.searchAtrists = () => {
            SearchService.search.get({
                show: $scope.showname
            }, (response) => {
                $scope.details=null;
                $scope.results = response.artists.items
            })
        }
        $scope.showDetails = (id, name, imgS) => {
          $scope.id = id;
          $scope.results = null;
          $scope.name = null;
          $scope.imgS = null;
          SearchService.detail.get({
          detail: $scope.id
          },(response) => {
          $scope.details = response.items
          $scope.name = name
          //$scope.artistName = response.items[0].artists[0].name
          $scope.imgS = imgS
          $scope.s = JSON.stringify($scope.details)
          console.log($scope.s)
        })
      }
    })

    .directive('customDirectiveToRenderDetails', function() {
  return {

    templateUrl:'custom-directive-to-render-details.html'
  };
}); 
