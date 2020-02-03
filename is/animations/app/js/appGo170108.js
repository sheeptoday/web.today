"use strict"


// svg animation

function svgaPathEvolutionStep( i, o )
{
  o.path.animate(
    { 'path' : o.d[i] },
    o.t[i],
    o.easing,
    function()
      {
        if ( i < o.imax ) 
          {
            // do next step
            // #PLACE-FOR do delay
            svgaPathEvolutionStep( i+1, o );
          }
        else 
          {
            // return to first step
            if ( o.loop ) 
              {                
                // #PLACE-FOR do delay
                svgaPathEvolutionStep( 0, o );
              }
            // finish
            else
              {
                // #PLACE-FOR callback
              }            
          }
      }
  );
}

function svgaPathEvolution( svgPath, steps, options )
{
  // o o o o o o o o o o
  // CHECK
  if ( !svgPath || !steps || steps < 1 ) return false;
  // o o o o o o o o o o
  // INIT
  var o = {
    path : svgPath,
    imax : steps,
    d : [],
    t : [],    
    easing : options.easing ? options.easing : mina.linear,
    loop : options.loop ? options.loop : false
  };
  // o o o o o o o o o o
  // FILL
  for ( var j=0; j<=steps; j++ )
  {
    o.d[j] = o.path.attr('d'+j);
    o.t[j] = options.timing && options.timing[j] ? options.timing[j] : 300;
  }  
  // o o o o o o o o o o
  // DO
  svgaPathEvolutionStep( 1, o );
}


// o o o o o o o o o o




















// loaded
$(function(){
  appData.pageIsLoaded = true;
  initSVGAnimation();
  launchSVGAnimation();
});

function launchSVGAnimation() {

  SVGitem.master = Snap( '#BubbleGum' );
  SVGitem.bubbleOne = SVGitem.master.select('path.bubbleOne');
  SVGitem.bubbleTwo = SVGitem.master.select('path.bubbleTwo');
  SVGitem.bubbleThree = SVGitem.master.select('path.bubbleThree');
  
  
  svgaPathEvolution( SVGitem.bubbleOne, 3, { timing:[1,400,800,1200], loop:true } );
  setTimeout( function(){ svgaPathEvolution( SVGitem.bubbleThree, 3, { timing:[1,400,800,1200], loop:true } ) }, 1800 );
  setTimeout( function(){ svgaPathEvolution( SVGitem.bubbleTwo, 3, { timing:[1,400,800,1200], loop:true } ) }, 850 );

}

// init js

var Time = {
  'x':100
}
var SVGitem = {};

function initSVGAnimation() {

}
function svgDoTransformPaths( paths, morph, time ) {
  var dTo;
  var tPath;
  for ( var i in paths )
  {
    tPath = paths[i];
    dTo = tPath.attr(morph);
    tPath.animate({ 'path':dTo }, time, mina.linear);
  }
  return true;
}




// loaded
$(function(){
  appData.pageIsLoaded = true;
  $('body').removeClass('hasLoading');
});