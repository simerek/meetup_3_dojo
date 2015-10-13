define(
    'meetup/example/Widgets',
    [
        'dojo/_base/declare',
        'meetup/Widget',
        'dojo/text!meetup/example/templates/Widgets.html'
    ],
    function (
        declare,
        Widget,
        template
    ) {
        return declare(
            'meetup.example.Widgets',
            [Widget],
            {
                templateString : template
            }
        );
    }
);