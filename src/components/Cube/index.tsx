import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-expect-error OrbitControls is not part of the official three.js types
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const Cube = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set initial camera position
    camera.position.z = 5;

    // Create OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose(); // Ensure proper cleanup of renderer resources
    };
  }, []);

  return <div ref={mountRef} style={{ overflow: 'hidden' }} />;
};
