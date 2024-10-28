
//===================== imported Addons
import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models


//....... GLOBAL VARIABLES
let scene, camera, torus, capsule, prism_poupy, prism_poupy1, prism_poupy2, prism_poupy3, prism_poupy4, mixer, dog, dog2, envi, mother;
let actionPant, actionTail;
let sceneContainer = document.querySelector("#scene-container");

const monkeyUrl = new URL('../assets/dog_shiny.gltf', import.meta.url);

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

document.body.appendChild(renderer.domElement);

const assetLoader = new GLTFLoader();

function init(){
    //===================== SCENE
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000)

    const light_1 = new THREE.DirectionalLight(0xffffff, 3);
    light_1.position.set(1,1,15);
    
    const light_2 = new THREE.DirectionalLight(0xffffff, 3);
    light_2.position.set(1,20,-10);

    scene.add(light_1);
    scene.add(light_2);
  

    camera = new THREE.PerspectiveCamera( 75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000 );
    camera.position.set( 0, 0, 0);
    

   
    renderer.setSize( sceneContainer.clientWidth, sceneContainer.clientHeight );
    renderer.setAnimationLoop( animate );
    sceneContainer.appendChild( renderer.domElement );

    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    const controls = new OrbitControls(camera, renderer.domElement); 
    const loader = new GLTFLoader(); // to load 3d models
    loader.load('assets/dog_shiny.gltf', function (gltf) {
        dog = gltf.scene;
        scene.add(dog);
        dog.scale.set(1, 1, 1);
        dog.position.y = .5; 
        dog.position.x = -4.5; 

        // animation!
        mixer = new THREE.AnimationMixer(dog); // initiate mixer
        const clips = gltf.animations;  // load all clips

        // load + play pant animation
        const clipPant = THREE.AnimationClip.findByName(clips, 'pant');
        const actionPant = mixer.clipAction(clipPant);
        actionPant.play();

        // load + play tail animation
        const clipTail = THREE.AnimationClip.findByName(clips, 'tail');
        const actionTail = mixer.clipAction(clipTail);
        actionTail.play();
    });
    loader.load('assets/dog_shiny.gltf', function (gltf) {
        dog2 = gltf.scene;
        scene.add(dog2);
        dog2.scale.set(2, 2, 2);
        dog2.position.y = -0.5; 
        dog2.position.x = 5; 

        // animation!
        mixer = new THREE.AnimationMixer(dog2); // initiate mixer
        const clips = gltf.animations;  // load all clips

        // load + play pant animation
        const clipPant = THREE.AnimationClip.findByName(clips, 'pant');
        const actionPant = mixer.clipAction(clipPant);
        actionPant.play();

        // load + play tail animation
        const clipTail = THREE.AnimationClip.findByName(clips, 'tail');
        const actionTail = mixer.clipAction(clipTail);
        actionTail.play();
    });

    loader.load('assets/mother.gtfl', function (gltf) {
        mother = gltf.scene;
        scene.add(mother);
        mother.scale.set(.01, .01, .01);
 
        // animation!
        mixer = new THREE.AnimationMixer(mother); // initiate mixer
        const clips = gltf.animations;  // load all clips

        // load + play leg1 animation
        const clipLeg1 = THREE.AnimationClip.findByName(clips, 'leg1');
        const actionLeg1 = mixer.clipAction(clipLeg1);
        actionLeg1.play();

        // load + play leg2 animation
        const clipLeg2 = THREE.AnimationClip.findByName(clips, 'leg2');
        const actionLeg2 = mixer.clipAction(clipLeg2);
        actionLeg2.play();

        // load + play hand animation
        const clipHand = THREE.AnimationClip.findByName(clips, 'hand');
        const actionHand = mixer.clipAction(clipHand);
        actionHand.play();

        // load + play hand1 animation
        const clipHand1 = THREE.AnimationClip.findByName(clips, 'hand1');
        const actionHand1 = mixer.clipAction(clipHand);
        actionHand.play();   

        // load + play hand2 animation
        const clipHand2 = THREE.AnimationClip.findByName(clips, 'hand2');
        const actionHand2 = mixer.clipAction(clipHand2);
        actionHand2.play();
     
        // load + play hand3 animation
        const clipHand3 = THREE.AnimationClip.findByName(clips, 'hand3');
        const actionHand3 = mixer.clipAction(clipHand3);
        actionHand3.play();

        // load + play hand4 animation
        const clipHand4 = THREE.AnimationClip.findByName(clips, 'hand4');
        const actionHand4 = mixer.clipAction(clipHand4);
        actionHand4.play();

        // load + play hand5 animation
        const clipHand5 = THREE.AnimationClip.findByName(clips, 'hand5');
        const actionHand5 = mixer.clipAction(clipHand5);
        actionHand5.play();

        // load + play hand6 animation
        const clipHand6 = THREE.AnimationClip.findByName(clips, 'hand6');
        const actionHand6 = mixer.clipAction(clipHand6);
        actionHand6.play();
    });

    loader.load('assets/env.gltf', function (gltf){
        envi = gltf.scene;
        scene.add(envi);
        envi.scale.set(3,3,3);
        envi.translateX(0);
        envi.translateY(-4);
        envi.translateZ(-8);  
    });
    loader.load('assets/mother', function (gltf){
        mother= gltf.scene;
        scene.add(mother);
        mother.scale.set(.1,.1,.1);
        mother.translateX(0);
        mother.translateY(-0.2);
    mother.translateZ(-18);  
    });

    loader.load('assets/prisim_poupy.gltf', function (gltf){
        prism_poupy = gltf.scene;
        scene.add(prism_poupy);
        prism_poupy.scale.set(.5,.5,.5);
        prism_poupy.translateX(15);
    });

     loader.load('assets/prisim_poupy.gltf', function (gltf){
         prism_poupy1 = gltf.scene;
         scene.add(prism_poupy1);
         prism_poupy1.scale.set(.5,.5,.5);
     });

     loader.load('assets/prisim_poupy.gltf', function (gltf){
         prism_poupy2 = gltf.scene;
         scene.add(prism_poupy2);
         prism_poupy2.scale.set(.5,.5,.5);
         prism_poupy2.translateY(0);
         prism_poupy2.translateX(-12);
     });

     loader.load('assets/prisim_poupy.gltf', function (gltf){
         prism_poupy3 = gltf.scene;
         scene.add(prism_poupy3);
         prism_poupy3.scale.set(.5,.5,.5);
         prism_poupy3.translateY(3);
     });

     loader.load('assets/prisim_poupy.gltf', function (gltf){
         prism_poupy4 = gltf.scene;
         scene.add(prism_poupy4);
         prism_poupy4.scale.set(.5,.5,.5);
         prism_poupy4.translateY(-3);
     });

    //===================== CAMERA
    camera.position.z = 5;

}


//===================== MOUSE EVENT

let mouseDown = false;


document.querySelector('#scene-container').addEventListener('mousedown', () => {
    console.log("mouse clicked");
    mouseDown = true;
    actionTail.play();
    actionTail.paused = false;

});
document.querySelector('#scene-container').addEventListener('mouseup', () => {
    console.log("mouse released");
    mouseDown = false;
    // actionTail.stop();
    actionTail.paused = true;

});

document.querySelector('#scene-container').addEventListener('mousemove', (e) => {
    if (mouseDown) {
        console.log("dragged");
        prism_poupy2.rotation.x += .5;
    }
});
document.querySelector('#scene-container').addEventListener('mousemove', (e) => {
    if (mouseDown) {
        console.log("dragged");
        prism_poupy4.rotation.y += .2;
    }
});



//===================== ANIAMTION
const clock = new THREE.Clock();

 function animate() {
    //  requestAnimationFrame(animate);
    if (dog) { // check to see if model loaded first
        mixer.update(clock.getDelta());
        dog.rotation.y = Math.sin(Date.now() / 2000) * 1.2;

    }

    if (dog2) { // check to see if model loaded first
        mixer.update(clock.getDelta());
        dog2.rotation.x = Math.sin(Date.now() / 4000) * 1.2;

    }

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