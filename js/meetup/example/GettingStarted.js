define(
    'meetup/example/GettingStarted',
    [
        'dojo/_base/declare',
        'meetup/Widget',
        'dojo/text!meetup/example/templates/GettingStarted.html'
    ],
    function (
        declare,
        Widget,
        template
    ) {
        return declare(
            'meetup.example.GettingStarted',
            [Widget],
            {
                templateString : template
            }
        );
    }
);