define(
    'meetup/example/Modules',
    [
        'dojo/_base/declare',
        'meetup/Widget',
        'dojo/text!meetup/example/templates/Modules.html'
    ],
    function (
        declare,
        Widget,
        template
    ) {
        return declare(
            'meetup.example.Modules',
            [Widget],
            {
                templateString : template
            }
        );
    }
);