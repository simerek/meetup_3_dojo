define(
    'meetup/Meetup',
    [
        'dojo/_base/declare',
        'meetup/Widget',
        'dojo/text!meetup/templates/Meetup.html',
        'meetup/example/GettingStarted',
        'meetup/example/Classes',
        'meetup/example/Modules',
        'meetup/example/Widgets'
    ],
    function (
        declare,
        Widget,
        template
    ) {
        return declare(
            'meetup.Meetup',
            [Widget],
            {
                templateString : template,

                hiddenOnStart : false,

                showGettingStartedExample : function ()
                {
                    this._hideExamples();
                    this.gettingStartedExampleNode.show();
                },

                showClassesExample : function ()
                {
                    this._hideExamples();
                    this.classesExampleNode.show();
                },

                showModulesExample : function ()
                {
                    this._hideExamples();
                    this.modulesExampleNode.show();
                },

                showWidgetsExample : function ()
                {
                    this._hideExamples();
                    this.widgetsExampleNode.show();
                },

                _hideExamples : function ()
                {
                    this.gettingStartedExampleNode.hide();
                    this.classesExampleNode.hide();
                    this.modulesExampleNode.hide();
                    this.widgetsExampleNode.hide();
                }
            }
        );
    }
);