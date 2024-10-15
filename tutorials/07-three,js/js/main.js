
//===================== imported Addons
import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models


//....... GLOBAL VARIABLES
let scene, camera, renderer, torus, capsule;

function init(){
    //===================== SCENE
    scene = new THREE.Scene();

    const light_1 = new THREE.DirectionalLight(0xffffff, 3);
    light_1.position.set(1,1,15);
    
    const light_2 = new THREE.DirectionalLight(0xffffff, 3);
    light_2.position.set(1,20,-10);

    scene.add(light_1);
    scene.add(light_2);
  

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animate );
    document.body.appendChild( renderer.domElement );

    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    const controls = new OrbitControls(camera, renderer.domElement); 
    const loader = new GLTFLoader(); // to load 3d models

    loader.load('assets/prisim_poupy.gltf', function (gltf){
        const prism_poupy = gltf.scene;
        scene.add(prism_poupy);
        prism_poupy.scale.set(5,5,5);
        prism_poupy.translateY(12);
    })

    //===================== Geometry

         const geometry_1 = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
         const texture_1 = new THREE.TextureLoader().load('texture/ice.jpg');
         const material_1 = new THREE.MeshStandardMaterial({ map: texture_1 });
         torus = new THREE.Mesh( geometry_1, material_1 );

         const geometry_2 = new THREE.CapsuleGeometry(2, 2, 4, 8 );
         const texture_2 = new THREE.TextureLoader().load('texture/wall.jpg');
         const material_2 = new THREE.MeshStandardMaterial({ map: texture_2 });
         capsule = new THREE.Mesh( geometry_2, material_2 );

         scene.add(torus);
         scene.add(capsule);
        

    //===================== CAMERA
    camera.position.z = 5;

}

//===================== ANIAMTION
 function animate() {
    
     torus.rotation.x += 0.001;
     torus.rotation.y += 0.001;

     capsule.rotation.x -= 0.01;
     capsule.rotation.y -= 0.01;

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