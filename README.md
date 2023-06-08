# View Transition API Demo
This is a demo of using the [View Tranisions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) in MPA page navigation patterns. For example, create an app launcher like transition and prerender the next page while showing a bridge state.
Note: As of Jun 8 2023, this MPA view transition requires chrome://flags#view-transition-on-navigation to be enabled.

![GIF](https://cdn.glitch.global/afc22f58-7717-45b3-9b3e-545c2c472195/vt5.gif?v=1686230397418)

## Live demo
- https://uskay-vt-demo-nav-1.glitch.me/

## How?
Food for thought... for example:

![vt-under-the-hood](https://cdn.glitch.global/afc22f58-7717-45b3-9b3e-545c2c472195/vt-under-the-hood.png?v=1686230588005)

In between the navigation,
- transition to a “bridge state” highlighting the shared element
- boot-up the next page behind the scenes (i.e. pre-* techniques)
- …then, conduct hard navigation, instantly & seamlessly

Check out the View Transition article for more details: https://developer.chrome.com/docs/web-platform/view-transitions/

## Disclaimer
This code base is built for demo purpose only (non production ready code). Please reference as one example of how View Transitions API can be used.

---

License Apache-2.0