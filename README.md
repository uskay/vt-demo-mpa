# View Transition API Demo (MPA)
This is a demo of using the [View Tranisions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) in MPA page navigation patterns. For example, create an app launcher like transition and prerender the next page while showing a bridge state.
Note: As of Jun 8 2023, this MPA view transition requires chrome://flags#view-transition-on-navigation to be enabled.

![GIF](https://cdn.glitch.global/afc22f58-7717-45b3-9b3e-545c2c472195/vt6.gif?v=1686231143291)

## Live demo
- https://uskay-vt-demo-nav-1.glitch.me/

## How?
Food for thought... for example:

![vt-under-the-hood](https://cdn.glitch.global/afc22f58-7717-45b3-9b3e-545c2c472195/vt-under-the-hood.png?v=1686230588005)

In between the navigation,
- transition to a “bridge state” highlighting the shared element
- boot-up the next page behind the scenes (i.e. pre-* techniques)
- …then, conduct hard navigation, instantly & seamlessly

Check out the View Transition article for more details:
- https://developer.chrome.com/docs/web-platform/view-transitions/
- Specific to MPA transition: https://github.com/WICG/view-transitions/blob/main/cross-doc-explainer.md

## Disclaimer
This code base is built for demo purpose only (non production ready code). Please reference as one example of how View Transitions API can be used.

## Credits
Thank you for your amazing & beautiful photos @ unsplash.com !
- [@jezar](https://unsplash.com/@jezar)
- [@jaison333](https://unsplash.com/@jaison333)
- [@boontohhgraphy]https://unsplash.com/@boontohhgraphy
- [@missle](https://unsplash.com/@missle)
- [@tianshu](https://unsplash.com/@tianshu)
- [@willxli](https://unsplash.com/@willxli)
- [@ultratunafish](https://unsplash.com/@ultratunafish)
- [@danrang](https://unsplash.com/@danrang)
- [@kokit1202](https://unsplash.com/@kokit1202)
- [@superidol](https://unsplash.com/@superidol)
- [@hiro0718](https://unsplash.com/@hiro0718)
- [@sunillnaik](https://unsplash.com/@sunillnaik)
- [@ary_heic](https://unsplash.com/@ary_heic)

---

License Apache-2.0