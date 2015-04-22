githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {
 
  var searchResource = $resource('https://api.github.com/search/users');
  var searchRepo = $resource('https://api.github.com/users/');

  $scope.doSearch = function (){
    $scope.searchResult = searchResource.get({
        q: $scope.searchTerm
      });
    };
 });
