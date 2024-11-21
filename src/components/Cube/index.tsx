import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three"; // Import THREE
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import dog1 from "../../assets/dog1.jpeg";
import klipboar from "../../assets/klipboar.jpg";
import dog3 from "../../assets/dog3.jpeg";
import dog4 from "../../assets/dog4.jpeg";
import dog5 from "../../assets/dog5.jpeg";
import dog6 from "../../assets/dog6.jpeg";

export const Cube = () => {
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const clickTimeout = useRef<number | null>(null);
  const clickCount = useRef(0);

  const [openDialog, setOpenDialog] = useState(false);
  const [imageName, setImageName] = useState<string | null>(null);

  // Texture loader for loading images
  const textureLoader = new THREE.TextureLoader();

  // Load images for the cube faces
  const textures = [
    { texture: textureLoader.load(dog1), name: "dog1.jpeg" },
    { texture: textureLoader.load(klipboar), name: "klipboar" },
    { texture: textureLoader.load(dog3), name: "dog3.jpeg" },
    { texture: textureLoader.load(dog4), name: "dog4.jpeg" },
    { texture: textureLoader.load(dog5), name: "dog5.jpeg" },
    { texture: textureLoader.load(dog6), name: "dog6.jpeg" }
  ];

  const handleDoubleClick = (e: ThreeEvent<PointerEvent>) => {
    const intersectedObject = e.intersections[0];
  
    if (intersectedObject && intersectedObject.face) {
      // Cast the object to THREE.Mesh to access its material
      const mesh = intersectedObject.object as THREE.Mesh;
      const material = mesh.material;
  
      if (Array.isArray(material)) {
        // Set image name based on the texture index
        setImageName(textures[intersectedObject.face.materialIndex].name);
      } else if (material instanceof THREE.MeshBasicMaterial) {
        // If it's a single material, set the image name directly
        setImageName(textures[0].name); // Default to the first texture
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
            <meshBasicMaterial attach={`material-${index}`} key={index} map={texture.texture} />
          ))}
          <boxGeometry args={[2, 2, 2]} />
        </mesh>
      </Canvas>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="xl" // Set maxWidth to xl for a larger dialog
        PaperProps={{
          style: {
            width: "70vw",
            height: "80vh",
            margin: 0, // Remove margin for full screen effect
            padding: 0, // Optional: remove padding if needed
            overflow: "hidden", // Prevent overflow
            backgroundColor: '#334155'
          }
        }}
      >
        <DialogTitle color="white">Image Name</DialogTitle>
        <DialogContent
          style={{
            height: "calc(100vh - 64px)", // Adjust content height to fill the remaining space
            width: "100%", // Full width
            padding: 20, // Add some padding
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden", // Ensure no overflow
            color: "white"
          }}
        >
          <p>The image name is: {imageName}</p>
        </DialogContent>
      </Dialog>
    </>
  );
};
