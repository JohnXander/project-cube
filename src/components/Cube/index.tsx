import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// @ts-expect-error OrbitControls is not part of the official three.js types
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export const Cube = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogImage, setDialogImage] = useState<string | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#1e293b');
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const textureLoader = new THREE.TextureLoader();
    const textures = [
      textureLoader.load('https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'),
      textureLoader.load('https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg'),
      textureLoader.load('https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=4%2C12%2C2679%2C1521&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip'),
      textureLoader.load('https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_square.jpg'),
      textureLoader.load('https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg'),
      textureLoader.load('https://dogsinc.org/wp-content/uploads/2021/08/extraordinary-dog.png'),
    ];

    const materials = textures.map(
      (texture) => new THREE.MeshBasicMaterial({ map: texture })
    );

    const geometry = new THREE.BoxGeometry();
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);

    // Raycaster for detecting face clicks
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onDoubleClick = (event: MouseEvent) => {
      // Calculate pointer position in normalized device coordinates
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update raycaster with the camera and pointer position
      raycaster.setFromCamera(pointer, camera);

      // Check for intersections
      const intersects = raycaster.intersectObject(cube);
      if (intersects.length > 0) {
        const faceIndex = intersects[0].face?.materialIndex; // Get the face's material index
        if (faceIndex !== undefined) {
          setDialogImage(textures[faceIndex].image.src); // Open the dialog with the face's image
          setDialogOpen(true);
        }
      }
    };

    window.addEventListener('dblclick', onDoubleClick);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('dblclick', onDoubleClick);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div ref={mountRef} style={{ overflow: 'hidden' }} />
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Cube Face Image</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <img src={dialogImage || ''} alt="Cube face" style={{ width: '100%' }} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
