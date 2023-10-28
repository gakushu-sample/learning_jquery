document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elems, {
        throttle: 100,
        scrollOffset: 400,
    });
});
