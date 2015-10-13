define(
    'meetup/example/Classes',
    [
        'dojo/_base/declare',
        'meetup/Widget',
        'dojo/text!meetup/example/templates/Classes.html'
    ],
    function (
        declare,
        Widget,
        template
    ) {
        return declare(
            'meetup.example.Classes',
            [Widget],
            {
                templateString : template
            }
        );
    }
);