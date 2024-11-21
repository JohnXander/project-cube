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
import { Typography, Box, Button, Link } from "@mui/material";

export const Cube = () => {
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const clickTimeout = useRef<number | null>(null);
  const clickCount = useRef(0);

  const [openDialog, setOpenDialog] = useState(false);
  const [imageName, setImageName] = useState<string | null>(null);
  const [showInstructions, setShowInstructions] = useState(true);

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
      const mesh = intersectedObject.object as THREE.Mesh;
      const material = mesh.material;

      if (Array.isArray(material)) {
        setImageName(textures[intersectedObject.face.materialIndex].name);
      } else if (material instanceof THREE.MeshBasicMaterial) {
        setImageName(textures[0].name);
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
    <div style={{ userSelect: "none" }}>
      <Canvas
        style={{ height: "100vh", width: "100vw", background: "#1e293b" }}
        camera={{ position: [0, 0, 3.5] }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={true} />
        <mesh
          ref={cubeRef}
          position={[0, 0, 0]}
          rotation={[Math.PI / 9, Math.PI / 2.75, 0]}
          onPointerDown={handlePointerDown}
        >
          {textures.map((texture, index) => (
            <meshBasicMaterial attach={`material-${index}`} key={index} map={texture.texture} />
          ))}
          <boxGeometry args={[2, 2, 2]} />
        </mesh>
      </Canvas>

      {/* Instructions for the user */}
      {showInstructions && (
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            zIndex: 10,
            textAlign: "center",
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "5px",
            width: "600px", // Optional, to better center the box
          }}
        >
          <Button
            onClick={() => setShowInstructions(false)}
            sx={{
              position: "absolute",
              top: "5px",
              right: "5px",
              color: "white",
              fontSize: "1rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              textTransform: "none",
            }}
          >
            ❌
          </Button>
          <Typography variant="h6" sx={{ mb: 1 }}>
            🖱️ Rotate the cube by dragging with the mouse. <br />
            🔍 Zoom in and out using the scroll wheel. <br />
            👆 Double click on a cube face to view a project.
          </Typography>
        </Box>
      )}

       {/* Links to GitHub and LinkedIn */}
       <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="body2" sx={{ mb: 1 }}>
          Connect with me on
        </Typography>
        <Box>
          <Link
            href="https://github.com/JohnXander"
            target="_blank"
            sx={{
              color: "white",
              textDecoration: "none",
              margin: "0 10px",
              fontWeight: "bold",
            }}
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/john-bloxam-210207250"
            target="_blank"
            sx={{
              color: "white",
              textDecoration: "none",
              margin: "0 10px",
              fontWeight: "bold",
            }}
          >
            LinkedIn
          </Link>
        </Box>
      </Box>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "70vw",
            height: "90vh",
            margin: 0,
            padding: 0,
            overflow: "hidden",
            backgroundColor: '#334155'
          }
        }}
      >
        <DialogTitle color="white">Image Name</DialogTitle>
        <DialogContent
          style={{
            height: "calc(100vh - 64px)",
            width: "100%",
            padding: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            color: "white"
          }}
        >
          <p>The image name is: {imageName}</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};
