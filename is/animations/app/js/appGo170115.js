"use strict"

// loaded
$(function(){



  appData.pageIsLoaded = true;
  $('body').removeClass('hasLoading');

});


  
    var SVGA = {};
    SVGA.tagname = '#SundayTransforms';
    SVGA.TAG = $(SVGA.tagname);
    SVGA.Master = {};
    SVGA.Paths = {}
    SVGA.pathCount = 0;
    SVGA.Slices = {};
    SVGA.sliceCount = 0;
    SVGA.isReadyToTransform = false;
    
    // Мне не нравится как я использую классы. Поэтому необходим линейный алгоритм. После написания линейного кода станет ясно, какие именно трудности должны взять на себя классы.
    // zl
    
    
    function svgaGetSlices(){
      SVGA.SlicesAreReady = false; // work started
      SVGA.$master = SVGA.TAG.children('.characterMaster');
      var slices = [];
      var $slices = SVGA.TAG.find('.characterSlice');
      
      $slices.each(function(eachIndex,eachElement){                
        slices.push( $(this).find('path') );
        SVGA.sliceCount++;
        $(this).hide();        
      });
      console.log(SVGA.sliceCount);
      var masterItems = [];
      var $masterItems = SVGA.$master.find('path');
      var itemCounter = 0;

      $masterItems.each(function(eachIndex,eachElement){
        var $thisTag = $(this);
        var thisPath = {};
        thisPath.$masterTag = $thisTag;
        thisPath.className = 'characterItem' + eachIndex;
        
        $thisTag.
          addClass('characterItem '+ thisPath.className);        
        
        thisPath.d = {}
        var tmpD;
        var tmpTagInSlice;
        var tmpI = 0;
        for (var j in slices) {
          tmpTagInSlice = $(slices[j][eachIndex]);
          tmpTagInSlice.addClass('characterItem '+ thisPath.className);
          thisPath.d[$slices.eq(j).attr('slicename')] = tmpTagInSlice.attr('d');
          tmpI++;
        }        
        
        SVGA.Paths[thisPath.className] = thisPath;
        SVGA.pathCount++;
      });
      
      // ======================================================
      
    }
    
    
    function svgaSnapInit(){
      SVGA.snapMaster = Snap( SVGA.tagname );
      for(var j in SVGA.Paths){
        SVGA.Paths[j].snapItem = SVGA.snapMaster.select('.characterMaster .' + SVGA.Paths[j].className);
      }
      console.log('Paths:',SVGA.Paths);
      SVGA.isReadyToTransform = true;
    }
    
    
    function svgaDoSlicedTransform(dSVGA, sliceName){
      
      
      var currentPath;
      SVGA.currentPathIsAnimated = true;
      SVGA.currentPathInProgress = SVGA.pathCount;
      SVGA.isReadyToTransform = false;
      for( var j = 0; j < SVGA.pathCount; j++)
      {
        //console.log( 'Snap', SVGA.Paths['characterItem'+j] );
        currentPath = SVGA.Paths['characterItem'+j];
        currentPath.snapItem.animate(
          { 'path' : currentPath.d[sliceName] },
          500,
          mina.linear,
          function(){
            $('.animationDoButton').addClass('isReady');
            $('.animationDoButton[gotoslice="'+sliceName+'"]').addClass('isCurrent');
            console.log('.animationDoButton[gotoslice="'+sliceName+'"]');
            /*
            SVGA.currentPathInProgress--;
            if(!SVGA.currentPathInProgress) {
              // end
              SVGA.currentPathIsAnimated = false;
              SVGA.isReadyToTransform = true;
              console.log(' Slice ' + sliceName + ' Done ');
              var newSliceName = sliceName + 1;
              if ( newSliceName >= SVGA.sliceCount ) newSliceName = 0;              
            }
            */
          }
        );
      }
    }
    
    SVGA.currentSliceToShow = 1;
    
    $(function(){
        
      
      svgaGetSlices();
      svgaSnapInit();
      //set loop
      /*
      setInterval(function(){
        svgaDoSlicedTransform(SVGA, SVGA.currentSliceToShow);
        SVGA.currentSliceToShow++;
        if( SVGA.currentSliceToShow >= SVGA.sliceCount ) SVGA.currentSliceToShow = 0;
      }, 1500);
      */

      

      $('.animationDoButton').on('click',function(e){
        var notReady = !$(this).hasClass('isReady');
        if( notReady ) return false;
        $('.animationDoButton').removeClass('isReady').removeClass('isCurrent');
        svgaDoSlicedTransform(SVGA, $(this).attr('gotoslice'));
      });      
      
      svgaDoSlicedTransform(SVGA, '1');      
      
    });
    
    
    function zlRunTest(test,p){
      return false;
      
      var x = {};
      switch(test){
      //zlRunTest('eachIndex & :eq for masterItems', {'papa':SVGA.$master, 'tag':$thisTag, 'index':eachIndex} );
        case 'eachIndex & :eq for masterItems':          
          console.log('TEST '+test+' ...');
          console.log( p.index, '==', p.tag.index() );
          console.log( p.tag, p.papa);
          return p.index == p.tag.index();
      }
    }