# Plan

- [ ] Show/discuss final solution
- [ ] Add simple navbar
    - [ ] Standalone components
    - [ ] Zoneless vs zone.js
    - [ ] Discuss tailwind classes
        - [ ] CSS Flexbox
    - [ ] Add navigation for /dashboard and /heroes/\*
        - [ ] Configure app-routes
        - [ ] Control flow
            - [ ] @for: List of nav items
            - [ ] @if: font-bold
- [ ] Ephemeral hero-list
    - [ ] Add list
    - [ ] Add delete
- [ ] Store hero-list in app-state
    - [ ] Create signal-store
- [ ] Hero-detail page
    - [ ] Formulare: Reactive forms vs template driven forms (vs. signal forms [experimental!])
    - [ ] Reusable form components (text-input, label)
    - [ ] Signal / Observable interop for status
- [ ] Make hero-list persistent
    - [ ] Local storage effect
- [ ] Add delete confirm dialog
    - [ ] Use a directive to initialize Dialog-Service
- [ ] Custom translation pipe

Additional topics:

- [ ] More exotic signals (computed, linkedSignal, resource)
- [ ] Rxjs and observables
- [ ] Signals interop with observables
- [ ] Signal forms
- [ ] Powerful TS typing
    - [ ] Omit, Partial, Pick, <Type>["field"]
    - [ ] unknown vs null vs any vs never
    - [ ] Discriminated union types
