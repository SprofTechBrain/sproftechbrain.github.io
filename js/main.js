/*
	Use smooth scrolling for same-page fragment links.
*/

if (
	// Only if smooth scrolling using CSS is not already supported.
	!("scrollBehavior" in document.documentElement.style) &&
	// Only if we can update the history using pushState, since both the default
	// link action and setting location.hash will scroll the page instantly.
	"pushState" in history
) {
	document.documentElement.addEventListener('click', function(event) {
		if (event.target.nodeName.toLowerCase() === 'a') {
			var href = event.target.getAttribute('href')

			if (href[0] === '#') {
				event.preventDefault()

				history.pushState({}, document.title, href)

				var fragmentEl = document.querySelector(href);

				fragmentEl.scrollIntoView({
					behavior: 'smooth'
				})

				// The default browser fragment navigation sets the position in the
				// sequential focus navigation order to the fragment element, so we need
				// to recreate that behaviour.
				var needsTabIndex = Number.isNaN(parseInt(fragmentEl.getAttribute('tabindex'), 10))
				needsTabIndex && fragmentEl.setAttribute('tabindex', '-1')
				fragmentEl.focus()
				needsTabIndex && fragmentEl.removeAttribute('tabindex')
			}
		}
	})
}
