
//===================== imported Addons
import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models


//....... GLOBAL VARIABLES
let scene, camera, renderer, cube;

function init(){
    //===================== SCENE
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animate );
    document.body.appendChild( renderer.domElement );

    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    const controls = new OrbitControls(camera, renderer.domElement); 
    const loader = new GLTFLoader(); // to load 3d models

    //===================== Geometry
    const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
    const texture = new THREE.TextureLoader().load('texture/ice.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    cube = new THREE.Mesh( geometry, material );
    scene.add(cube);

    //===================== CAMERA
    camera.position.z = 5;

}

//===================== ANIAMTION
function animate() {
    
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;

    renderer.render( scene, camera );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / windown.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener('resize', onWindowResize, false);

init();
animate();