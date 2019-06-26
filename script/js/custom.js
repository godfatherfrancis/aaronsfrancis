jQuery( document ).ready( function( $ ){

    function printCredits() {
        console.log("                                                                                          \
            \n     ______          ______      __  __                 ______                      _            \
            \n    / ____/___  ____/ / __/___ _/ /_/ /_  ___  _____   / ____/________ _____  _____(_)____       \
            \n   / / __/ __ \\/ __  / /_/ __ `/ __/ __ \\/ _ \\/ ___/  / /_  / ___/ __ `/ __ \\/ ___/ / ___/   \
            \n  / /_/ / /_/ / /_/ / __/ /_/ / /_/ / / /  __/ /     / __/ / /  / /_/ / / / / /__/ (__  )        \
            \n  \\____/\\____/\\__,_/_/  \\__,_/\\__/_/ /_/\\___/_/     /_/   /_/   \\__,_/_/ /_/\\___/_/____/ \
            \n    _________________________________________________________________________________            \
            \n       ___________________________________________________________________________               \
            \n                                                                                                 \
            \nCreated by Aaron 'Godfather' Francis                                                             \
            \nAaron Francis :: Developer + Creative + Design                                                   \
            \n  >Twitter: @godfathrfrancis                                                                     \
            ");
    }

    printCredits();

	// Intro size setup

	// setupIntro(); // On ready, resize intro

	// $( window ).resize( function() { setupIntro(); } ); // On resize

	function setupIntro() {
		var infoBox = $('.info' );
		var titleBox = $( '.info').find('.container');
		$( '.info' ).find( '.container' ).css( 'top', ( ( infoBox.height() - titleBox.height() - 20 ) / 1.87) + 'px' );
	}

    function glitch() {
        $( ".glitch-img" ).mgGlitch({
            destroy : false, // set 'true' to stop the plugin
            glitch: true, // set 'false' to stop glitching
            scale: true, // set 'false' to stop scaling
            blend : true, // set 'false' to stop glitch blending
            blendModeType : 'hue', // select blend mode type
            glitch1TimeMin : 200, // set min time for glitch 1 elem
            glitch1TimeMax : 400, // set max time for glitch 1 elem
            glitch2TimeMin : 10, // set min time for glitch 2 elem
            glitch2TimeMax : 100, // set max time for glitch 2 elem
            // zIndexStart : 8, // because of absolute position, set z-index base value
        });
    }

    glitch();

    let info = document.querySelector("#my-shine-object");

    info.onclick = toggleClass;

    function toggleClass(){
        if(info.className == 'name'){
            info.className = ''
        } else {
            info.className = 'name'
        }
    }

});