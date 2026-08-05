import * as THREE from 'three';

// Defines the scene and camera. Camera Parameters include FOV, aspect ratio
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Defines the renderer in which the objects will get rendered
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

// Creates what the cube should look like
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const texture = new THREE.TextureLoader().load('SITKOL.jpg')
const material = new THREE.MeshBasicMaterial({map : texture});
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

const torus_geo = new THREE.TorusGeometry(10, 3, 16, 100);
const torus_tex = new THREE.MeshBasicMaterial({color : 0xe8f5ff});
const torus = new THREE.Mesh(torus_geo, torus_tex);
scene.add(torus);

camera.position.z = 5;

function animate()
{
    // Update objects
    cube.rotation.y += 0.01
    cube.rotation.z += 0.01

    torus.rotation.y += 0.01
    torus.rotation.x += 0.01

    // Render
    renderer.render(scene, camera)

    // Call animate again on the next frame
    window.requestAnimationFrame(animate)
}

animate()