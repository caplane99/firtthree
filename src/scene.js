import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y= 50;
camera.position.z = 200*(1400/window.innerWidth);
let renderer;
let obj;
const jeffTexture = new THREE.TextureLoader().load('channels4_profile.jpg');

const jeff = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 50), new THREE.MeshBasicMaterial({ map: jeffTexture }));

scene.add(jeff);

const glftLoader = new GLTFLoader();
    glftLoader.load('scene.gltf', (gltf)=>{
      obj= gltf.scene;
      scene.add(obj)
      
    })
    
    export let obj1;
    glftLoader.load('untitled.glb', (gltf)=>{
      obj1= gltf.scene;
      scene.add(obj1)
      
    })
    

    
    let light1 = new THREE.PointLight(0x9F0FF,3);
    light1.position.set(0,300,500);
    scene.add(light1);
    
    let light2 = new THREE.PointLight(0xffffff,3);
    light2.position.set(500,100,0);
    scene.add(light2);
  
    let light3 = new THREE.PointLight(0xffffff,3);
    light3.position.set(0,100,-500);
    scene.add(light3);
  
    let light4 = new THREE.PointLight(0xffffff,3);
    light4.position.set(-500,300,0);
    scene.add(light4);
const spaceTexture = new THREE.TextureLoader().load('cyberpu.jpg');
scene.background = spaceTexture;

let pivot = new THREE.Object3D();
pivot.add(camera);
const animate = () => {
  requestAnimationFrame(animate);
 
  obj1.scale.set(10,10,10)
  obj.position.y=-200;
  obj.rotation.set(0,Math.PI/8,-Math.PI/8)
  
  camera.lookAt(0,camera.position.y,0)
  
  
  
 
  renderer.render(scene, camera);
};

 
const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
  export function pop(yop,pol) {
    camera.position.y=(-yop/6)+50
    pivot.rotation.y= (Math.PI/100)*(yop/16)
    jeff.rotation.z+=yop/15000
    jeff.rotation.y+=yop/15000
    jeff.position.x=(-yop/12)-200
    jeff.position.y=(-yop/6)+50
    console.log(yop)
    return yop

    
  }
//
export const createScene = (el) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el,powerPreference: "high-performance",
	antialias: false,
	stencil: false,
	depth: false });
  renderer.toneMapping = THREE.CineonToneMapping;
  const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new EffectPass(camera, new BloomEffect()));
renderer.shadowMap.enabled = true;

requestAnimationFrame(function render() {

	requestAnimationFrame(render);
	composer.render();

});
  
  resize();
  animate();
  
  
}


window.addEventListener('resize', resize);