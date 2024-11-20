import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three"; // Import THREE

export const Cube = () => {
  const cubeRef = useRef();
  const clickTimeout = useRef(null); // Ref to store the timeout ID
  const clickCount = useRef(0); // Track the number of clicks

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
          console.log(`Double clicked on ${selectedMaterial.color.getHexString()}`);
        } else {
          console.log("Material doesn't have a color property");
        }
      } else {
        // If material is a single object, check if it's MeshBasicMaterial
        if (material instanceof THREE.MeshBasicMaterial) {
          console.log(`Double clicked on ${material.color.getHexString()}`);
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
      clearTimeout(clickTimeout.current); // Clear the timeout to prevent treating it as a single click
      clickCount.current = 0; // Reset the click count
      handleDoubleClick(e); // Call the double-click handler
    }
  };

  return (
    <Canvas style={{ height: "100vh", background: "#fff" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={true} />
      <mesh ref={cubeRef} position={[0, 0, 0]} onPointerDown={handlePointerDown}>
        {/* Front face */}
        <meshBasicMaterial attach="material-0" color="blue" />
        {/* Back face */}
        <meshBasicMaterial attach="material-1" color="green" />
        {/* Left face */}
        <meshBasicMaterial attach="material-2" color="red" />
        {/* Right face */}
        <meshBasicMaterial attach="material-3" color="yellow" />
        {/* Top face */}
        <meshBasicMaterial attach="material-4" color="orange" />
        {/* Bottom face */}
        <meshBasicMaterial attach="material-5" color="purple" />
        <boxGeometry args={[2, 2, 2]} />
      </mesh>
    </Canvas>
  );
};
