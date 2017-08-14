
(function ( $ ) {

    $.fn.logofy = function() {
        return this.each(function() {
            var logofied = '<span class="dnGrey">{dev}</span><span class="dnRed dnBold">Nomads</span>';
            if($(this).text().search("{dev}Nomads") >= 0  && $(this).html()===$(this).text()) {
                var content = $(this).text();
                content = content.replace( '{dev}Nomads', logofied );
                $(this).html( content );
            }
            if($(this).text().search("devNomads") >= 0 && $(this).html()===$(this).text()) {
                var content = $(this).text();
                content = content.replace( 'devNomads', logofied );
                $(this).html( content );
            }
            if($(this).text().search("devnomads") >= 0 && $(this).html()===$(this).text()) {
                var content = $(this).text();
                content = content.replace( 'devnomads', logofied );
                $(this).html( content );
            }
        });
    };

}(jQuery));

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

console.log('Hello world 6');