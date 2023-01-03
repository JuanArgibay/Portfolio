
export const onScrollPercentage = () => {
    let pixelFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight*3;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = ((100 * pixelFromTop) / difference) * 0.66 + 34;
    return percentage;
}