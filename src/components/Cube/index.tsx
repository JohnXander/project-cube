import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three"; // Import THREE
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export const Cube = () => {
  const cubeRef = useRef<THREE.Mesh | null>(null); // Ensure the ref is typed as THREE.Mesh or null
  const clickTimeout = useRef<number | null>(null); // Ensure it's typed as number | null
  const clickCount = useRef(0); // Track the number of clicks

  const [openDialog, setOpenDialog] = useState(false); // State to control the Dialog visibility
  const [dialogColor, setDialogColor] = useState<string>("#ffffff"); // State for background color

  const handleDoubleClick = (e: ThreeEvent<PointerEvent>) => {
    // Get the intersection of the click position with the cube
    const intersectedObject = e.intersections[0];

    if (intersectedObject && intersectedObject.face) {
      // Explicitly cast the object to THREE.Mesh to access 'material'
      const mesh = intersectedObject.object as THREE.Mesh;
      const materialIndex = intersectedObject.face.materialIndex;
      const material = mesh.material;

      // Check if material is an array or a single material
      if (Array.isArray(material)) {
        // If material is an array, use the materialIndex to access the specific material
        const selectedMaterial = material[materialIndex];

        // Narrow the type to MeshBasicMaterial to access 'color'
        if (selectedMaterial instanceof THREE.MeshBasicMaterial) {
          setDialogColor(selectedMaterial.color.getHexString()); // Set the background color
          setOpenDialog(true); // Open the dialog
        } else {
          console.log("Material doesn't have a color property");
        }
      } else {
        // If material is a single object, check if it's MeshBasicMaterial
        if (material instanceof THREE.MeshBasicMaterial) {
          setDialogColor(material.color.getHexString()); // Set the background color
          setOpenDialog(true); // Open the dialog
        } else {
          console.log("Material doesn't have a color property");
        }
      }
    } else {
      console.log("No intersection or face found");
    }
  };

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    // Increment the click count
    clickCount.current += 1;

    if (clickCount.current === 1) {
      // First click: set a timeout to check for a double-click
      clickTimeout.current = setTimeout(() => {
        clickCount.current = 0; // Reset the click count after the timeout (do nothing for single click)
      }, 300); // 300ms timeout for double-click detection
    } else if (clickCount.current === 2) {
      // Double click: immediately handle the double-click
      if (clickTimeout.current !== null) {
        clearTimeout(clickTimeout.current); // Clear the timeout to prevent treating it as a single click
      }
      clickCount.current = 0; // Reset the click count
      handleDoubleClick(e); // Call the double-click handler
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
          rotation={[Math.PI / 8, Math.PI / 3, 0]} // Rotate the cube to show 3 faces
          onPointerDown={handlePointerDown}
        >
          {/* Front face */}
          <meshBasicMaterial attach="material-0" color={new THREE.Color("#e2e8f0")} />
          {/* Back face */}
          <meshBasicMaterial attach="material-1" color={new THREE.Color("#cbd5e1")} />
          {/* Left face */}
          <meshBasicMaterial attach="material-2" color={new THREE.Color("#94a3b8")} />
          {/* Right face */}
          <meshBasicMaterial attach="material-3" color={new THREE.Color("#64748b")} />
          {/* Top face */}
          <meshBasicMaterial attach="material-4" color={new THREE.Color("#475569")} />
          {/* Bottom face */}
          <meshBasicMaterial attach="material-5" color={new THREE.Color("#334155")} />
          <boxGeometry args={[2, 2, 2]} />
        </mesh>
      </Canvas>

      {/* MUI Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Color Information</DialogTitle>
        <DialogContent
          style={{
            height: "200px",
            width: "300px",
          }}
        >
          <p style={{ color: "#334155" }}>This is the color: {dialogColor}</p>
        </DialogContent>
      </Dialog>
    </>
  );
};
