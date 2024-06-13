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
let mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//Render
renderer.render(scene, camera); 