define(
    'meetup/Widget',
    [
        'dojo/_base/declare',
        'dijit/_Widget',
        'dijit/_TemplatedMixin',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/dom-class'
    ],
    function (
        declare,
        Widget,
        TemplatedMixin,
        WidgetsInTemplateMixin,
        domClass
    ) {
        return declare(
            'meetup.Widget',
            [Widget, TemplatedMixin, WidgetsInTemplateMixin],
            {
                hiddenOnStart : true,

                constructor : function ()
                {
                    console.log(this.declaredClass + ':constructor');
                },

                postMixInProperties : function ()
                {
                    console.log(this.declaredClass + ':postMixInProperties');

                    this.inherited(arguments);
                },

                buildRendering : function ()
                {
                    console.log(this.declaredClass + ':buildRendering');

                    this.inherited(arguments);
                },

                postCreate : function ()
                {
                    console.log(this.declaredClass + ':postCreate');

                    if (this.hiddenOnStart) {
                        this.hide();
                    }

                    $('pre code', this.domNode).each(function () {
                        hljs.highlightBlock(this)
                    });

                    this.inherited(arguments);
                },

                startup : function ()
                {
                    console.log(this.declaredClass + ':startup');

                    this.inherited(arguments);
                },

                show : function ()
                {
                    domClass.remove(this.domNode, 'hidden');
                },

                hide : function ()
                {
                    domClass.add(this.domNode, 'hidden');
                }
            }
        );
    }
);