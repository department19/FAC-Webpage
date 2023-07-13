# Title

## bugs
- scroll snap won't work in conjunction with scroll behavior, scroll snap is disabled for now
- css dynamic viewport lengths currently not used correctly, consider using dvh and svh for the heights. dvw and svw unfortunately won't work to help fix the horizontal scrolling. Currently using `overflow-x: hidden;` to resolve
- the item tiles in the projects section are currently not responsive and in response to smaller screen sizes seem to just flex shrink at the moment
- aos (animate on scroll) is affecting the project tile hover animation, maybe need to export the `:hover` from CSS to JS tracking
- elements that go out of view when using the navbar retrigger the aos animation
- unhovering the project tiles causes clipping issues between the tiles
- js aos stagger 