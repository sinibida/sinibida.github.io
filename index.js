let blocks;
const delta = 0.08;

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
        let pos = getPosition(i, event.clientX, event.clientY);
        blocks[i].style.left = pos[0] + 'px';
        blocks[i].style.top = pos[1] + 'px';
    }
}

function handleMouseMove(event) {
    setBlockPositions();
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
}

window.addEventListener('DOMContentLoaded', windowOnLoad);