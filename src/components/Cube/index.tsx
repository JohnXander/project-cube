import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three"; // Import THREE
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import dog1 from "../../assets/dog1.jpeg";
import dog2 from "../../assets/dog2.jpeg";
import dog3 from "../../assets/dog3.jpeg";
import dog4 from "../../assets/dog4.jpeg";
import dog5 from "../../assets/dog5.jpeg";
import dog6 from "../../assets/dog6.jpeg";

export const Cube = () => {
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const clickTimeout = useRef<number | null>(null);
  const clickCount = useRef(0);

  const [openDialog, setOpenDialog] = useState(false);
  const [uuid, setUuid] = useState<string | null>(null);

  // Texture loader for loading images
  const textureLoader = new THREE.TextureLoader();

  // Load images for the cube faces
  const textures = [
    textureLoader.load(dog1),
    textureLoader.load(dog2),
    textureLoader.load(dog3),
    textureLoader.load(dog4),
    textureLoader.load(dog5),
    textureLoader.load(dog6)
  ];

  const handleDoubleClick = (e: ThreeEvent<PointerEvent>) => {
    const intersectedObject = e.intersections[0];
  
    if (intersectedObject && intersectedObject.face) {
      // Cast the object to THREE.Mesh to access its material
      const mesh = intersectedObject.object as THREE.Mesh;
      const material = mesh.material;
  
      if (Array.isArray(material)) {
        const selectedMaterial = material[intersectedObject.face.materialIndex];
        setUuid(selectedMaterial.uuid);
      } else if (material instanceof THREE.MeshBasicMaterial) {
        setUuid(material.uuid);
      }
      setOpenDialog(true);
    }
  };

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    clickCount.current += 1;

    if (clickCount.current === 1) {
      clickTimeout.current = setTimeout(() => {
        clickCount.current = 0;
      }, 300);
    } else if (clickCount.current === 2) {
      if (clickTimeout.current !== null) {
        clearTimeout(clickTimeout.current);
      }
      clickCount.current = 0;
      handleDoubleClick(e);
    }
  };

  return (
    <>
      <Canvas style={{ height: "100vh", width: "100vw", background: "#1e293b" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={true} />
        <mesh
          ref={cubeRef}
          position={[0, 0, 0]}
          rotation={[Math.PI / 8, Math.PI / 3, 0]}
          onPointerDown={handlePointerDown}
        >
          {textures.map((texture, index) => (
            <meshBasicMaterial attach={`material-${index}`} key={index} map={texture} />
          ))}
          <boxGeometry args={[2, 2, 2]} />
        </mesh>
      </Canvas>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Material UUID</DialogTitle>
        <DialogContent
          style={{
            height: "200px",
            width: "300px",
          }}
        >
          <p style={{ color: "#334155" }}>The UUID is: {uuid}</p>
        </DialogContent>
      </Dialog>
    </>
  );
};
