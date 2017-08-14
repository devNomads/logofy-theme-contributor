
jQuery.fn.textWalk = function( fn, str ) {
    console.log("to replace: " + fn);
    var func = jQuery.isFunction(fn);
    var remove = [];
    this.contents().each( jwalk );

    // remove the replaced elements
    remove.length && $(remove).remove();

    function jwalk() {
        console.log(this.data);
        var nn = this.nodeName.toLowerCase();
        if( nn === '#text' ) {
            var newValue;

            if (func) {
                newValue = fn.call(this);
            } else {
                newValue = this.data.replace(fn, str);
            }

            $(this).before(newValue);
            remove.push(this)
        } else if( this.nodeType === 1 && this.childNodes && this.childNodes[0] && nn !== 'script' && nn !== 'textarea' ) {
            $(this).contents().each( jwalk );
        }
    }
    return this;
};

jQuery.fn.logofy = function() {
    return this.each(function() {
        var logofied = '<span class="dnGrey">{dev}</span><span class="dnRed dnBold">Nomads</span>';
        $(this).textWalk('{dev}Nomads',logofied);
        $(this).textWalk('{dev}nomads',logofied);
        $(this).textWalk('devNomads',logofied);
        $(this).textWalk('devnomads',logofied);
    });
};

$( document ).ready(
    function() {
        $("h1").logofy();
        $("h2").logofy();
        $("h3").logofy();
        $("h4").logofy();
        $("p").logofy();
        $("a").logofy();
        $("span.site-name").logofy();
    }
);
