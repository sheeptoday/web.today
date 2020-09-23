/** Lazy Loader
 *  2019.11.7
 */


/** ----------------------------------------- Usage template


<script defer src="app/script/components/image-lazy-loader.js"></script>
<img data-src="file.jpg" width="800" height="600">


*/
/** ----------------------------------------- Define loader */


function LazyLoader() {
    const allLazyImages   = document.querySelectorAll('[data-src]')
    const observerOptions = { rootMargin:'100px 0px' }
    const MakeImageLoaded = img => img.src = img.dataset.src

    const LoadWithObserver = function() {
     // Define observer
        const ObserverTask  = entries => entries.forEach(ObservationTask)
        const ObservationTask = entry => entry.isIntersecting ? WakeUp(entry.target) : false
        const RemoveObservation = img => LazyObserver.unobserve(img)
        const WakeUp = img => {
              MakeImageLoaded(img)
              RemoveObservation(img)
        }
     // Run observer
        let LazyObserver = new IntersectionObserver(ObserverTask, observerOptions)
        allLazyImages.forEach(img=>LazyObserver.observe(img))
    }

    if ('IntersectionObserver' in window) LoadWithObserver()
    else allLazyImages.forEach(MakeImageLoaded)
}


/** ----------------------------------------- Autorun */


document.addEventListener('DOMContentLoaded', LazyLoader)


/** EOF Lazy Loader */
