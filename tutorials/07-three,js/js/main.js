
//===================== imported Addons
import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models


//....... GLOBAL VARIABLES
let scene, camera, torus, capsule, prism_poupy, prism_poupy1, prism_poupy2, prism_poupy3, prism_poupy4, mixer, dog_shiny;
let actionPant, actionTail;
let sceneContainer = document.querySelector("#scene-container");

const monkeyUrl = new URL('../assets/dog_shiny.gltf', import.meta.url);

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

document.body.appendChild(renderer.domElement);

const assetLoader = new GLTFLoader();

function init(){
    //===================== SCENE
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x3E57FF)

    const light_1 = new THREE.DirectionalLight(0xffffff, 3);
    light_1.position.set(1,1,15);
    
    const light_2 = new THREE.DirectionalLight(0xffffff, 3);
    light_2.position.set(1,20,-10);

    scene.add(light_1);
    scene.add(light_2);
  

    camera = new THREE.PerspectiveCamera( 75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000 );

   
    renderer.setSize( sceneContainer.clientWidth, sceneContainer.clientHeight );
    renderer.setAnimationLoop( animate );
    sceneContainer.appendChild( renderer.domElement );

    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    const controls = new OrbitControls(camera, renderer.domElement); 
    const loader = new GLTFLoader(); // to load 3d models

    assetLoader.load(monkeyUrl.href, function(gltf) {
        const model = gltf.scene;
        scene.add(model);
        mixer = new THREE.AnimationMixer(model);
        const clips = gltf.animations;
        const clip = THREE.AnimationClip.findByName(clips, 'HeadAction)');
        
        clips.forEach(function(clip) {
        const action = mixer.clipAction(clip);
        action.play();
    });

    }, undefined, function(error) {
        console.error(error);
    });
    
    // loader.load('assets/dog_shiny.gltf', function (gltf){
    //     dog = gltf.scene;
    //     scene.add(dog);
    //     dog.scale.set(5,5,5);
    //     dog.translateY(-2);
        
    //     //animation
    //     mixer = THREE.AnimationMixer(dog);
    //     const clips = gltf.animations;

    //     // load + play animation

    //      clipPant = THREE.AnimationClip.findByName(clips, 'pant');
    //       actionPant = mixer.clipAction(clipPant);
    //     // action.play();

    //      clipTail = THREE.AnimationClip.findByName(clips, 'tail');
    //      actionTail = mixer.clipAction(clipTail);
    //     action.play();

    // });

    
    loader.load('assets/prisim_poupy.gltf', function (gltf){
        prism_poupy = gltf.scene;
        scene.add(prism_poupy);
        prism_poupy.scale.set(1,1,1);
        prism_poupy.translateX(15);
    });

     loader.load('assets/prisim_poupy.gltf', function (gltf){
         prism_poupy1 = gltf.scene;
         scene.add(prism_poupy1);
         prism_poupy1.scale.set(.5,.5,.5);
         prism_poupy1.translateX(8);
     });

     loader.load('assets/prisim_poupy.gltf', function (gltf){
         prism_poupy2 = gltf.scene;
         scene.add(prism_poupy2);
         prism_poupy2.scale.set(2,2,2);
         prism_poupy2.translateY(0);
         prism_poupy2.translateX(-12);
     });

     loader.load('assets/prisim_poupy.gltf', function (gltf){
         prism_poupy3 = gltf.scene;
         scene.add(prism_poupy3);
         prism_poupy3.scale.set(1,1,1);
         prism_poupy3.translateY(3);
     });

     loader.load('assets/prisim_poupy.gltf', function (gltf){
         prism_poupy4 = gltf.scene;
         scene.add(prism_poupy4);
         prism_poupy4.scale.set(1,1,1);
         prism_poupy4.translateY(-3);
     });

    //===================== Geometry

          const geometry_1 = new THREE.TorusKnotGeometry( 10/5, 3/5, 100/5, 16/5 );
          const texture_1 = new THREE.TextureLoader().load('texture/ice.jpg');
          const material_1 = new THREE.MeshStandardMaterial({ map: texture_1 });
          torus = new THREE.Mesh( geometry_1, material_1 );
          torus.translateX(-8);
          torus.translateY(-3)

          const geometry_2 = new THREE.CapsuleGeometry(2, 2, 4, 8 );
          const texture_2 = new THREE.TextureLoader().load('texture/wall.jpg');
          const material_2 = new THREE.MeshStandardMaterial({ map: texture_2 });
          capsule = new THREE.Mesh( geometry_2, material_2 );
          capsule.translateX(8);

          scene.add(torus);
          scene.add(capsule);
        

    //===================== CAMERA
    camera.position.z = 5;

}

document.querySelector("header").addEventListener("mousedown", () => {
    actionPant.play();
    console.log("mousedown")
});


//===================== ANIAMTION
const clock = new THREE.Clock();

 function animate() {
    //  requestAnimationFrame(animate);


    if (prism_poupy){
        prism_poupy.rotation.x -= 0.007;
        prism_poupy.rotation.y += 0.001;
        prism_poupy.position.x = Math.sin(Date.now() / 4000 ) * 4;
        prism_poupy.position.y = Math.sin(Date.now() / 1500 ) * 2;
    }
    if (prism_poupy1){
        prism_poupy1.rotation.x -= 0.007;
        prism_poupy1.rotation.y -= 0.001;
        prism_poupy1.position.x = Math.sin(Date.now() / 5000 ) * 4;
        prism_poupy1.position.y = Math.sin(Date.now() / 2500 ) * 2;
        prism_poupy1.position.z = Math.sin(Date.now() / 1500 ) * 2;
    }
    if (prism_poupy2){
        // prism_poupy2.rotation.x += 0.004;
        // prism_poupy2.rotation.y -= 0.001;
        prism_poupy2.rotation.y = Math.sin(Date.now() / 900 ) * 6;
    }
    if (prism_poupy3){
        prism_poupy3.rotation.x -= 0.009;
        prism_poupy3.rotation.y -= 0.001;
        prism_poupy3.position.x = Math.sin(Date.now() / 2500 ) * 6;
        prism_poupy3.position.y = Math.sin(Date.now() / 1500 ) * 6;
        prism_poupy3.position.z = Math.sin(Date.now() / 50500 ) * 2;
        
    }
    if (prism_poupy4){
        prism_poupy4.rotation.x += 0.001;
        prism_poupy4.rotation.y += 0.004;
        prism_poupy4.position.x = Math.sin(Date.now() / 2500 ) * 3;
        prism_poupy4.position.y = Math.sin(Date.now() / 4000 ) * 5;
        prism_poupy4.position.z = Math.sin(Date.now() / 5500 ) * 2;
    }
    
     renderer.render( scene, camera );
 }

renderer.setAnimationLoop(animate);

function onWindowResize() {
    camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( sceneContainer.clientWidth, sceneContainer.clientHeight );
}
window.addEventListener('resize', onWindowResize, false);

init();
animate();