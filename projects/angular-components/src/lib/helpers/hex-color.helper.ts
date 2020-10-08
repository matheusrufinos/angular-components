export default function getHexColor(element, variable) {
    return window.getComputedStyle(element, null).getPropertyValue(variable);
}
