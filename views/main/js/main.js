
/**
 * Created by vinidev on 20/07/16.
 */
(function(){

    function teste(){
        console.log('Heyyy yaaa222aa');
    }

    teste();

    function routerConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    'nav': {
                        templateUrl: '/main/partials/dashnav.html', controller: 'DashboardController', controllerAs: 'dashCtrl'
                    }
                }
            })
    }

    function DashboardController(){
        var self    = this;
        self.test   = test;

        test();

        function test(){
            console.log('Heyyy yaaaaa');
        }
    }


    angular.module('DashboardPageModule',['ui.router', 'ui.bootstrap'])
        .controller('DashboardController', DashboardController)
        .config(routerConfig)
})();

