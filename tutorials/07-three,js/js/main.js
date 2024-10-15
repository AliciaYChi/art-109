// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

//~~~~~~~GLOBAL DECLARATIONS~~~~~~


function init(){
    //~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
        import * as THREE from 'three';

    // Import add-ons
        import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
        import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



    // ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    const controls = new OrbitControls(camera, renderer.domElement);
    //const loader = new GLTFLoader(); // to load 3d models

    // ~~~~~~~~~~~~~~~~ 3-D stuff ~~~~~~~~~~~~~~~~
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const texture = new THREE.TextureLoader().load('img/ice.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);


    // ~~~~~~~~~~~~~~~~ camera ~~~~~~~~~~~~~~~~
    camera.position.x = 5;

}

// ~~~~~~~~~~~~~~~~ Animation ~~~~~~~~~~~~~~~~
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// ~~~~~~~~~~~~~~~~ WINDOW RESIZE ~~~~~~~~~~~~~~~~
function onWindowResize(){
    camera.aspect = window.innerWidth / windown.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


// ------------------- RUN FUNCTIONS-------------------

window.addEventListener('resize', onWindowResize, false)

init();

animate(); // execute animation function