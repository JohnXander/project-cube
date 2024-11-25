import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three"; // Import THREE
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import klipboar from "../../assets/klipboar.jpg";
import minilrs from "../../assets/minilrs.jpg";
import geoquix from "../../assets/geoquix.jpg";
import projectcube from "../../assets/projectcube.jpg";
import captivote from "../../assets/captivote.jpg";
import avatarify from "../../assets/avatarify.jpg";
import { Typography, Box, Button, Link } from "@mui/material";
import { projectData } from "../../data/projectData";

export const Cube = () => {
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const clickTimeout = useRef<number | null>(null);
  const clickCount = useRef(0);

  const [openDialog, setOpenDialog] = useState(false);
  const [projectName, setProjectName] = useState<string | null>(null);
  const [showInstructions, setShowInstructions] = useState(true);

  // Texture loader for loading images
  const textureLoader = new THREE.TextureLoader();

  // Load images for the cube faces
  const textures = [
    { texture: textureLoader.load(projectcube), name: "projectcube" },
    { texture: textureLoader.load(klipboar), name: "klipboar" },
    { texture: textureLoader.load(geoquix), name: "geoquix" },
    { texture: textureLoader.load(captivote), name: "captivote" },
    { texture: textureLoader.load(minilrs), name: "minilrs" },
    { texture: textureLoader.load(avatarify), name: "avatarify" }
  ];

  const handleDoubleClick = (e: ThreeEvent<PointerEvent>) => {
    const intersectedObject = e.intersections[0];

    if (intersectedObject && intersectedObject.face) {
      const mesh = intersectedObject.object as THREE.Mesh;
      const material = mesh.material;

      if (Array.isArray(material)) {
        setProjectName(textures[intersectedObject.face.materialIndex].name);
      } else if (material instanceof THREE.MeshBasicMaterial) {
        setProjectName(textures[0].name);
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
        style={{ height: "100vh", width: "100vw", background: "linear-gradient(135deg, #0f172a, #1e293b)" }}
        camera={{ position: [0, 0, 5] }}
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
            textAlign: "left",
            paddingLeft: "1rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "5px",
            width: "280px", // Default width
            fontSize: "0.875rem",
          }}
        >
          <Button
            onClick={() => setShowInstructions(false)}
            sx={{
              position: "absolute",
              top: '0.5rem',
              right: '0.75rem',
              color: "white",
              fontSize: "0.75rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              textTransform: "none",
              outline: "none",
              padding: "0 !important", // Ensure no padding
              minWidth: 0, // Remove default minimum width
              "&:focus": {
                outline: "none",
              },
            }}
          >
            ㄨ
          </Button>
          <Typography
            variant="h6"
            sx={{
              fontSize: "0.75rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.75rem",
              color: '#f8fafc'
            }}
          >
            <strong style={{ color: '#7dd3fc', fontSize: '1rem' }}>LAPTOP CONTROLS</strong> <br />
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
        <Typography variant="body2" sx={{ mb: '0.25rem' }}>
          Connect with me:
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
              "&:hover": {
                color: "#7dd3fc", // Change to your desired hover color
              },
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
              fontSize: "1rem",
              "&:hover": {
                color: "#7dd3fc", // Change to your desired hover color
              },
            }}
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:your-email@example.com"
            sx={{
              color: "white",
              textDecoration: "none",
              margin: "0 10px",
              fontWeight: "bold",
              fontSize: "1rem",
              "&:hover": {
                color: "#7dd3fc", // Change to your desired hover color
              },
            }}
          >
            Email
          </Link>
        </Box>
      </Box>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="xl"
        PaperProps={{
          sx: {
            // Default styles
            width: '75vw', // 75% width for larger screens
            height: '100vh', // Full height
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #1e293b, #334155)',

            '@media (min-width: 800px)': {
              width: '50vw',
            },
      
            // Media query for small screens (mobile)
            '@media (max-width: 600px)': {
              width: '100vw',  // Full width for mobile
            },
          },
        }}
      >
        <DialogTitle sx={{ color: "white", position: "relative", padding: "1rem 2rem"}}>
          <Typography variant="h4" sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {projectName && projectData[projectName as keyof typeof projectData]
            ? projectData[projectName as keyof typeof projectData].title
            : "Project Name"}
          </Typography>
          <Button
            onClick={() => setOpenDialog(false)}
            sx={{
              position: "absolute",
              top: "8px",
              right: "20px",
              color: "white",
              fontSize: "1.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              textTransform: "none",
              padding: 0,
              minWidth: 0,
              outline: "none",
              "&:focus": {
                outline: "none",
              },
            }}
          >
            ㄨ
          </Button>
        </DialogTitle>
        <DialogContent
          style={{
            height: "calc(100vh - 64px)",
            width: '100%',
            padding: 20,
            paddingTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            overflow: "hidden",
            color: "white",
          }}
        >
          {/* Render Video or Image */}
          {projectName && projectData[projectName as keyof typeof projectData] ? (
            projectData[projectName as keyof typeof projectData].video ? (
              <video
                src={projectData[projectName as keyof typeof projectData].video}
                controls
                style={{
                  maxWidth: "81%",
                  maxHeight: "70%",
                  borderRadius: "8px",
                  marginLeft: '1rem',
                }}
              />
            ) : projectData[projectName as keyof typeof projectData].image ? (
              <img
                src={projectData[projectName as keyof typeof projectData].image}
                alt={projectData[projectName as keyof typeof projectData].title || "Image"}
                style={{
                  maxWidth: "81%",
                  maxHeight: "70%",
                  borderRadius: "8px",
                  marginLeft: '1rem',
                }}
              />
            ) : (
              <p>No media available</p>
            )
          ) : (
            <p>Loading...</p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
