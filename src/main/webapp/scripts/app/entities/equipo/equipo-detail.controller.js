'use strict';

angular.module('ligabasquetApp')
    .controller('EquipoDetailController', function ($scope, $rootScope, $stateParams, entity, Equipo, Jugador, Entrenador, Estadio, Partido, Temporada) {
        $scope.equipo = entity;
        $scope.load = function (id) {
            Equipo.get({id: id}, function(result) {
                $scope.equipo = result;
            });
        };
        $rootScope.$on('ligabasquetApp:equipoUpdate', function(event, result) {
            $scope.equipo = result;
        });
    });
