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

				document.querySelector(href).scrollIntoView({
					behavior: 'smooth'
				})
			}
		}
	})
}
