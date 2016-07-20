/**
 * Created by vinidev on 20/07/16.
 */
(function(){

function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/landing');

    $stateProvider
        .state('landing', {
            url: '/landing',
            views: {
                'landingPage': {
                    templateUrl: '/landing.html', controller: 'LandingController', controllerAs: 'landingCtrl'
                }
            }
        })
}

function LandingController(){
    var self    = this;
    self.test   = test;

    test();

    function test(){
        console.log('Heyyy yaaaaa');
    }
}


angular.module('LandingPageModule',['ui.router', 'ui.bootstrap'])
    .controller('LandingController', LandingController)
    .config(routerConfig)
})();

