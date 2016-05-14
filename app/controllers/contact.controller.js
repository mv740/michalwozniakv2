/**
 * Created by Michal Wozniak on 5/14/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ContactController', ContactController );

    ContactController.$inject = ['NgMap'];
    function ContactController(NgMap) {
        var vm = this;
        var googleApiKey = "AIzaSyAcAkK0gU63uwHLAllZb6UuwK6mVHD6e3w";
        vm.googleMapsUrl= "https://maps.googleapis.com/maps/api/js?key=AIzaSyAcAkK0gU63uwHLAllZb6UuwK6mVHD6e3w";

    }


})();
