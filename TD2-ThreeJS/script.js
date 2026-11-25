import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight( 0xffffff, 1 );
scene.add( light );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const loader = new THREE.TextureLoader();
const texture = loader.load('./texture-k.jpg');
const material = new THREE.MeshBasicMaterial( { map: texture } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate( time ) {

  cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;
  cube.position.x = -1.5;

  renderer.render( scene, camera );

}

const loader3D = new GLTFLoader();

loader3D.load('./sea-turtle-base.glb', function(gltf) {

    const tortue = gltf.scene;
    tortue.position.x = 2;
    scene.add(tortue);

});