const thingsToCleanUp = [];
let cityName = '';
let url = '';
[...document.querySelectorAll('.clickable')].forEach(clickableElm => {
  clickableElm.addEventListener('click', async evt => {
    // Temporary add transition name
    const target = evt.currentTarget;
    cityName = target.getAttribute('data-city-name');
    if (!document.startViewTransition) {
      location.href = `/city.html?${cityName}`;
      return;
    }
    // Prerender
    const specRules = document.createElement('script');
    specRules.type="speculationrules";
    specRules.innerHTML = `
      {
        "prerender": [
          {
            "source": "list",
            "urls": ["/city.html?${cityName}"]
          }
        ]
      }
    `
    document.head.appendChild(specRules);
    document.documentElement.style.setProperty('--theme', `${cityName}`);
    target.style.viewTransitionName = 'transition-trigger';
    // Temporary add transitional background (artificially, the "from" state)
    const position = evt.currentTarget.getBoundingClientRect();
    const bgFrom = document.createElement('div');
    thingsToCleanUp.push(bgFrom);
    bgFrom.classList.add('transition-bg-from');
    bgFrom.style.top = position.y;
    bgFrom.style.left = position.x;
    bgFrom.style.width = evt.target.width;
    bgFrom.style.height = evt.target.height;
    bgFrom.style.viewTransitionName = 'transition-bg';
    document.body.appendChild(bgFrom);
    // Start view transition to a bridge state
    let transition = document.startViewTransition(_ => {
      // Remove transition names
      target.style.viewTransitionName = '';
      bgFrom.style.viewTransitionName = '';
      // Create the transition bridge state
      // Container
      const transitionBridgeContainer = document.createElement('div');
      transitionBridgeContainer.classList.add('transition-bridge-container');
      thingsToCleanUp.push(transitionBridgeContainer);
      // Background
      const transitionBg = document.createElement('div');
      transitionBg.classList.add('transition-bg');
      // Click-trigger
      const triggerCloneContainer = document.createElement('div');
      triggerCloneContainer.classList.add('trigger-clone-container');
      const triggerClone = target.cloneNode(true);
      triggerClone.classList.add('trigger-clone');
      // Add ripple effect (reference: https://codepen.io/chris22smith/pen/NWwzYrZ)
      const circles = document.createElement('div');
      circles.classList.add('circles');
      const circle1 = document.createElement('div');
      circle1.classList.add('circle1');
      const circle2 = document.createElement('div');
      circle2.classList.add('circle2');
      const circle3 = document.createElement('div');
      circle3.classList.add('circle3');
      circles.append(circle1, circle2, circle3);
      triggerCloneContainer.append(triggerClone, circles);
      transitionBg.appendChild(triggerCloneContainer);
      transitionBridgeContainer.appendChild(transitionBg);
      document.body.appendChild(transitionBridgeContainer);
    });
    try {
      await transition.finished;
    } finally {
      // Artifically wait for 1.5 - 2.0 seconds, and then navigate (for demo purpose)
      // In reality, we could use this period to wait for the
      // next page to boot up (e.g. via prerendering)
      setTimeout(async _ => {
        transition = document.startViewTransition(_ => {
          // remove all temporary stuff
          location.href = `/city.html?${cityName}`;
        });
        try {
          await transition.finished;
        } finally {
          window.addEventListener('pageshow', _ => {
            thingsToCleanUp.forEach(elm => {
              elm.parentNode.removeChild(elm);
            });
          });
        }
      }, cityName === 'tokyo' ? 2000 : 1500);
    }
  });
});