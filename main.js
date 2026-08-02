import * as THREE from 'three';

// Defines the scene and camera. Camera Parameters include FOV, aspect ratio
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Defines the renderer in which the objects will get rendered
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 5;

function animate()
{
    // Update objects
    cube.rotation.y += 0.01

    // Render
    renderer.render(scene, camera)

    // Call animate again on the next frame
    window.requestAnimationFrame(animate)
}

animate()