(function() {

Ember.C3 = Ember.Namespace.create();
Ember.C3.VERSION = '0.0.0';

Ember.libraries.register('ember-c3', Ember.C3.VERSION);


})();

(function() {

'use strict';
/**
C3 Chart component
*/
Ember.C3.ChartComponent = Ember.Component.extend({
    /**
    Element tag name
    */
    tagName: 'div',

    /**
    Element classes
    */
    classNames: [],

    /**
    The element to bind the chart to
    */
    bindTo: null,

    /**
    The data to display
    */
    data: {},

    /**
    Axis specifications
    */
    axis: {},

    /**
    Region specifications
    */
    regions: {},

    /**
    Type of chart
    */
    type: null,
    bar: {},
    pie: {},
    donut: {},

    /**
    Grid lines
    */
    grid:{},

    /**
    Legend
    */
    legend: {},

    /**
    Tooltip
    */
    tooltip: {}

    /**
    Subchart
    */
    subchart: {},

    /**
    Zoom
    */
    zoom: {},

    /**
    Size
    */
    size: {},

    /**
    Padding
    */
    padding: {},

    /**
    Color
    */
    color: {},


    /**
    Transition
    */
    transition: {},

    /**
    The Chart
    */
    chart: function() {
        var self = this;
        var chart = c3.generate({

        });
    },

    /**
    Data Observer
    */
    dataDidChange: function() {

    }.observes('data')

});

Ember.Handlebars.helper('c3-chart', Ember.C3.ChartComponent);


})();