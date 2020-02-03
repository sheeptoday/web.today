"use strict"

//[{name:"
//"}],




var domGrid = $('#zlIconGrid-root');

// create icon grid
$(function(){
  
  
  var tmplItemLayer0 = '<div class="zlIconGridItem"></div>';
  var itemData, itemDOM, itemDOMlayer, itemDOMel;
  
  // each array item
  for ( var i in dataIcons ) {
    itemDOMel = $('<img>');
    itemDOMel
      .addClass('zlIcon')
      .attr('src', dataIconsMd.path + dataIcons[i].name + '.svg')
      .attr('alt', dataIcons[i].name);
    itemDOMlayer = $('<figure>');
    itemDOMlayer.append(itemDOMel)
    itemDOM = $(tmplItemLayer0);
    itemDOM
      .addClass('zlIconGridItem-'+dataIcons[i].name)
      .append(itemDOMlayer);
    if (dataIcons[i].tag) itemDOM.addClass(dataIcons[i].tag);
    domGrid.append(itemDOM);
  }
  
  var img = document.querySelector('img');
  if (img.complete) {
    loaded();
  } else {
    img.addEventListener('load', loaded)
    img.addEventListener('error', function() {
        alert('error. refresh page')
    })
  }
  
  $('.jsGridView').on('click',function(e){
    var TARGET = $(e.currentTarget);
    var mode = TARGET.data('gridview');
    $('.jsGridView').removeClass('isActive');
    TARGET.addClass('isActive');
    setTimeout(function(){
        $('.zlIconGrid').removeClass('zlIconGrid-mode-rows');
        $('.zlIconGrid').removeClass('zlIconGrid-mode-grid');
        $('.zlIconGrid').addClass('zlIconGrid-mode-'+mode);
        domGrid.isotope('layout');
    },10);
  });
  
  $('.jsGridFilter').on('click',function(e){
    var TARGET = $(e.currentTarget);
    var filter = TARGET.data('gridfilter');
    $('.jsGridFilter').removeClass('isActive');
    TARGET.addClass('isActive');
    setTimeout(function(){
        if (filter=='all') domGrid.isotope({ filter: '*' });
        else domGrid.isotope({ filter: '.o-'+ filter });
    },10);
  });

  
});

// loaded
function loaded() {
  domGrid.isotope({
    itemSelector: '.zlIconGridItem',
    layoutMode: 'masonry',
    filter: '.o-home'
  });  
}

$(function(){

});