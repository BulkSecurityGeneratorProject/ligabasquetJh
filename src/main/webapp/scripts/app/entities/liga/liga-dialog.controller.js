'use strict';

angular.module('ligabasquetApp').controller('LigaDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Liga', 'Temporada', 'Arbitro',
        function($scope, $stateParams, $modalInstance, entity, Liga, Temporada, Arbitro) {

        $scope.liga = entity;
        $scope.temporadas = Temporada.query();
        $scope.arbitros = Arbitro.query();
        $scope.load = function(id) {
            Liga.get({id : id}, function(result) {
                $scope.liga = result;
            });
        };

        var onSaveFinished = function (result) {
            $scope.$emit('ligabasquetApp:ligaUpdate', result);
            $modalInstance.close(result);
        };

        $scope.save = function () {
            if ($scope.liga.id != null) {
                Liga.update($scope.liga, onSaveFinished);
            } else {
                Liga.save($scope.liga, onSaveFinished);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
