githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {
 
  var searchResource = $resource('https://api.github.com/search/users');
  // var key = '24b282ff3579e89e5f1725a41faed8375abd3575';

  $scope.doSearch = function (){
    $scope.searchResult = searchResource.get({
        q: $scope.searchTerm
        // access_token: key
      });
    };
 
 });
