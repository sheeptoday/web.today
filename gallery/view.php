<?php

// display single image

$requested_image = isset( $_GET['img'] ) ? $_GET['img'] : false;

if ( !$requested_image ) {

// exit one

    echo "blog redirect";

} else {

// get data

$image_details = array(
    'zzz.jpg'
    => array(
        'title' => 'image title',
        'text'  => 'description text'
    )
);

if ( $image_details[$requested_image] ) $infa = $image_details[$requested_image];
else $infa = array(); // empty

// view

?>

<!doctype html>
<html lang="en">
<head>

<title>Picture</title>
<meta charset="utf-8">

<!-- SOCIAL -->
<meta property="og:title" content="<?= $infa['title'] ? $infa['title'] : 'Picture' ?>" />
<meta property="og:url" content="http://sheep.today/gallery/view.php?img=<?=$requested_image?>" />
<meta property="og:type" content="article" />
<meta property="og:locale" content="ru_RU" />

<meta property="og:description" content="From gallery of sheep.today" />
<meta property="og:image" content="http://sheep.today/data/gallery/<?=$requested_image?>" />

<!-- FAVICON -->
<link rel="apple-touch-icon" href="../app/favicons/apple-icon-180x180.png">
<link rel="icon" type="image/png" href="../app/favicons/android-icon-192x192.png">
<link rel="manifest" href="../app/favicons/manifest.json">
<meta name="msapplication-TileColor" content="#FFCC01">
<meta name="msapplication-TileImage" content="../app/favicons/ms-icon-144x144.png">
<meta name="theme-color" content="#FFCC01">

<script>
// hey google!
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-87015828-1', 'auto');
ga('send', 'pageview');
</script>



<!-- =================================================== frontend in head -->

<!-- frontent settings 12з.20xx -->

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta http-equiv="x-ua-compatible" content="ie=edge">

<!-- critical CSS -->

<style>
</style>

<!-- libs -->

<!-- bulma --><link href="../app/lib/bulma.css" rel="stylesheet"  media="all">
<!-- like-buttons --><link href="../app/lib/social-likes_flat.css" rel="stylesheet"  media="all">

<!-- app design --><link href="../app/css/app-zhu.css" rel="stylesheet"  media="all">

</head>
<body class="elBody">
<section class="elView is-single">
<!-- xxxxxxxx BEGIN ʕ⊙ᴥ⊙ʔ VIEW xxxxxxxx -->



<!-- =================================================== view header -->

<header class="elHeader cHeader">

    <!-- logo -->
    <div class="elItem elLogo cLogo">
        <a href="http://sheep.today/" class="cHomeLink"><img src="../app/img/sheep.today.svg" height="48" /></a>
        <h2>www.sheep.today</h2>
    </div>
    <!-- endblock -->

    <!-- header menu -->
    <nav class="elHeaderMenu cMenu">
        <ul>
            <li class=""><a href="../#Home">Home</a></li>
            <li class=""><a href="../gallery/page1.html">Gallery</a></li>
            <li class=""><a href="../products/book-latvia-atlas-gazania.html">Products</a></li>
            <li class=""><a href="../#Contacts">Contacts</a></li>
        </ul>
    </nav>
    <!-- endblock -->

</header>



<!-- =================================================== view main -->

<main class="elMain cMain">

    <section class="content zlPicturesGallery">
        <article class="zlPicture">
            <? if ( $infa['title'] || $infa['text'] ) { ?>
            <header>
                <div class="zlPicture__description">
                    <? if ( $infa['title'] ) { ?>
                    <h4><?= $infa['title']?></h4>
                    <? } ?>
                    <?= $infa['text'] ?>
                    <div class="zlPicture__actions">
                        <a href="../data/gallery/<?=$requested_image?>" download class="button">Download image</a><br>
                    </div>
                </div>
                <div class="zlPicture__descriptionTrigger jsPicture__descriptionTrigger">
                    <span class="aIcon aIcon--close"></span>
                </div>
            </header>
            <? } ?>
            <main>
                <figure><img src="../data/gallery/<?=$requested_image?>" class="zzz"></figure>
            </main>
            <footer>
                <div class="zlPicture__social">
                    <div class="social-likes social-likes_vertical" data-url="http://sheep.today/gallery/view.php?img=<?=$requested_image?>">
                    <div data-service="facebook" title="Share link on Facebook">Facebook</div>
                    <div data-service="twitter" title="Share link on Twitter">Twitter</div>
                    <div data-service="pinterest" title="Share link on Pinterest" data-media="image link, required">Pinterest</div>
                    <div data-service="vkontakte" title="Share link on Vkontakte">Vkontakte</div>
                    </div>
                </div>
            </footer>
        </article>
    </section>
    <section class="content" style="font-size:2em;text-align:center;">
        <a href="http://sheep.today/gallery/">← more pictures in gallery</a>
    </section>

</main>



<!-- =================================================== view footer -->

<footer class="elFooter">
</footer>





<!-- xxxxxxxx FINISH ʕ⊙ᴥ⊙ʔ VIEW xxxxxxxx -->
<div class="elView__shadow jsMenuClose" data-action="close"></div>
</section>






<!-- =================================================== mobile header -->

<nav class="elHeader elHeaderMobile cHeader">

    <!-- logo -->
    <div class="elItem elLogo cLogo">
        <a href="http://sheep.today/"><img src="../app/img/sheep.today.svg" height="44" /></a>
        <h2>www.sheep.today</h2>
    </div>
    <!-- endblock -->

    <!-- aside menu trigger -->
    <div class="elItem elMenuTrigger cMenuTrigger jsMenuTrigger">
        <div class="elMenuTrigger__readyToOpen">
            <span class="aIcon aIcon--hamburger"></span>
        </div>
        <div class="elMenuTrigger__readyToClose">
            <span class="aIcon aIcon--close aIcon__contrast"></span>
        </div>
    </div>
    <!-- endblock -->

    <!-- drop overlay om main -->
    <div class="elView__shadow jsMenuClose" data-action="close"></div>
    <!-- endblock -->

</nav>



<!-- =================================================== aside panel -->

<!-- aside menu -->
<aside class="elAside cMenu cMenuAside">
    <ul>
        <li class=""><a href="../#Home">Home</a></li>
        <li class=""><a href="../gallery/page1.html">Gallery</a></li>
        <li class=""><a href="../products/book-latvia-atlas-gazania.html">Products</a></li>
        <li class=""><a href="../#Contacts">Contacts</a></li>
    </ul>
</aside>
<!-- endblock -->



<!-- =================================================== frontend in body bottom -->

<!-- libs -->

<!-- zepto --><script src="../app/lib/zepto.js"></script>

<!-- app engine -->

<script src="../app/js/app-zhu.js"></script>
<script>
$(function(){

    /* gallery info trigger */
    $('.jsGalleryInfoTrigger').on('click', jsGalleryInfoTrigger);
    function jsGalleryInfoTrigger(e) {
        var KLIKER = $(e.currentTarget);
        var ARTICLE = KLIKER.closest('article');
        ARTICLE.toggleClass('hasOpenInfo');
    }

});
</script>

</body>
</html>


<?php

// end of view

}

?>
