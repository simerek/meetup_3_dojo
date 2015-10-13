define(
    'meetup/Loader',
    [
        'dojo/_base/declare',
        'dojo/text!meetup/templates/Loader.html',
        'dojo/dom-construct',
        'dojo/dom-class'
    ],
    function (
        declare,
        template,
        domConstruct,
        domClass
    ) {
        return declare(
            'meetup.Loader',
            [],
            {
                _loader : null,

                showLoader : function ()
                {
                    if (this._loader == null) {
                        this._loader = domConstruct.create('div', {
                            innerHTML : template
                        }, this.domNode);
                    }
                },

                hideLoader : function ()
                {
                    domClass.add(this._loader, 'hidden');
                }
            }
        );
    }
);