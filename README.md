# My Portfolio Website
(now defunct and archived, new updated version avaliable at https://department19.github.io/)

*This website is made as part of my portfolio to apply to FAC*

## Structure
the basic layout of the game consists of these elements:
- Header bar - will be sticky to the top of the screen so that the button to toggle the navigation bar is always available
- Banner - this will be the front page area
- Navigation bar - will allow quick navigation to each area of the website
- Main content area:
	- About me 
	- Projects - will contain tiles for which the github repo for the website and other projects will be linked
	- Contact

## Planned implementations
- Animated navigation bar slide when toggled
- Content animation on scroll
	- staggered tile animations with scroll
- Animated tile expansion on hover
- Animated navigation bar buttons


## bugs
- certain elements aren't fully responsive such as
	- the main banner
	- project tiles 
- scroll snap won't work in conjunction with scroll behavior, scroll snap is disabled for now
- css dynamic viewport lengths currently not used correctly, consider using dvh and svh for the heights. dvw and svw unfortunately won't work to help fix the horizontal scrolling. Currently using `overflow-x: hidden;` to resolve
- the item tiles in the projects section are currently not responsive and in response to smaller screen sizes seem to just flex shrink at the moment
- aos (animate on scroll) is affecting the project tile hover animation, maybe need to export the `:hover` from CSS to JS tracking
- elements that go out of view when using the navbar retrigger the aos animation
- unhovering the project tiles causes clipping issues between the tiles
- js aos stagger 
