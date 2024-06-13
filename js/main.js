import * as THREE from 'three';

const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth /  window.innerHeight,
    0.1,
    1000
);

scene.add(camera);
camera.position.z = 5; //Move camera back 5 units

const renderer = new THREE.WebGLRenderer({ antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xfffff, 1); //background colour
document.body.appendChild(renderer.domElement);

//let there be light!
//colour, intensity, distance, decay. light follows camera
let ambientLight = new THREE.AmbientLight(0X101010, 1.0);
ambientLight.position.z = 5;
scene.add(ambientLight);

//Directional light
//colour, intensity
let sunLight = new THREE.DirectionalLight(0xddddd, 1.0);
sunLight.position.y = 15;
scene.add(sunLight);

let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({color: 0xff000});
let cube = new THREE.Mesh(geometry, material);

scene.add(cube);

//Controlls
document.addEventListener('keydown', onkeydown, false);

function onkeydown(e){
    let keycode = e.which;
    if(keycode == 39){
        camera.translateX(-0.05);
    }else if(keycode == 37){
        camera.translateX(0.05);
    }else if(keycode == 38){
        camera.translateY(-0.05);
    }else if(keycode == 40){
        camera.translateY(0.05);
    }
}

let renderLoop = function(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera); 
    requestAnimationFrame(renderLoop);
}

renderLoop();

