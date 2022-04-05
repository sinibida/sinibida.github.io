let blocks;
const delta = 0.08;
let targetX = 0;
let targetY = 0;
let trailX = [0];
let trailY = [0];
let followForce = 0.3;
let indexFactor = 4;
let maxQueueSize = 30;

function animate() {
    calcCurrentPosition();
    setBlockPositions();
    requestAnimationFrame(animate);
}

function calcCurrentPosition() {
    let curX = targetX * followForce + trailX[trailX.length - 1] * (1 - followForce);
    let curY = targetY * followForce + trailY[trailY.length - 1] * (1 - followForce);
    trailX.push(curX);
    trailY.push(curY);
    if (trailX.length > maxQueueSize /*|| trailY.length > maxQueueSize*/) {
        trailX.shift();
        trailY.shift();
    }
}

function getSize(index) {
    let x = 1 - delta * (index + 1);
    return {0: window.innerWidth * x, 1: window.innerHeight * x};
}

function getPosition(index, x, y) {
    return {0: x * delta * (index + 1), 1: y * delta * (index + 1)};
}

function setBlockSizes() {
    for (let i = 0; i < blocks.length; i++) {
        let size = getSize(i);
        blocks[i].style.width = size[0] + 'px';
        blocks[i].style.height = size[1] + 'px';
    }
}

function setBlockPositions() {
    for (let i = 0; i < blocks.length; i++) {
        let pos = getPosition(
            i,
            trailX[trailX.length - 1 - (blocks.length - 1 - i) * indexFactor],
            trailY[trailY.length - 1 - (blocks.length - 1 - i) * indexFactor]);
        blocks[i].style.left = pos[0] + 'px';
        blocks[i].style.top = pos[1] + 'px';
    }
}

function handleMouseMove(event) {
    targetX = event.clientX;
    targetY = event.clientY;
}

function handleResize() {
    setBlockSizes();
}

function windowOnLoad() {
    blocks = document.getElementsByClassName("block");

    setBlockSizes();
    setBlockPositions();

    document.onmousemove = handleMouseMove;

    window.onresize = handleResize;

    animate();
}

window.addEventListener('DOMContentLoaded', windowOnLoad);