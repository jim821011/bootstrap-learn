let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function heightToTop(ele) {
    let bridge = ele;
    let root = document.body;
    let height = 0;
    do {
        height += bridge.offsetTop;
        bridge = bridge.offsetParent;
    } while (bridge !== root);

    return height;
}
function goToTab() {
    window.scrollTo({
        top: heightToTop(document.getElementsByClassName("tab-content")[0]) - 70,
        behavior: "smooth",
    });
}