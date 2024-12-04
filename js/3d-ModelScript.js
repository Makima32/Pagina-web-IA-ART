// Basic configuration for scene, camera, and renderer
const SCENE = new THREE.Scene();
const CAMERA = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const RENDERER = new THREE.WebGLRenderer({ antialias: true });

RENDERER.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(RENDERER.domElement); // Add the canvas to the body or a specific container

// Add ambient and directional light
const AMBIENT_LIGHT = new THREE.AmbientLight(0xffffff, 0.6);
SCENE.add(AMBIENT_LIGHT);

const DIRECTIONAL_LIGHT = new THREE.DirectionalLight(0xffffff, 1);
DIRECTIONAL_LIGHT.position.set(5, 5, 5);
SCENE.add(DIRECTIONAL_LIGHT);

// Set camera position
CAMERA.position.set(0, 10, 50);
CAMERA.lookAt(0, 0, 0);

// Create an empty group for rotation (may not be necessary but works as intended)
const PIVOT = new THREE.Group();
SCENE.add(PIVOT);

// Load 3D model using GLTFLoader
const LOADER = new THREE.GLTFLoader();
LOADER.load(
  'models/prision_realm.glb', // Model path
  function (gltf) {
    const model = gltf.scene;
    PIVOT.add(model); // Add the model to the group for rotation

    // Adjust position, scale, and initial rotation of the model
    model.position.set(0, 6, 0);
    model.scale.set(80, 80, 80); // Scale the model
    model.rotation.set(Math.PI / 4, Math.PI / 4, 0); // Rotate 45° on X and Y axes

    console.log('Model loaded successfully');
  },
  undefined,
  function (error) {
    console.error('Error loading the model:', error);
  }
);

// Animation function to render the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the pivot group around the Y-axis
  PIVOT.rotation.y += 0.005; // Diagonal rotation

  RENDERER.render(SCENE, CAMERA);
}
animate();
