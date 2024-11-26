import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three"; // Import THREE
import klipboar from "../../assets/klipboar.jpg";
import minilrs from "../../assets/minilrs.jpg";
import geoquix from "../../assets/geoquix.jpg";
import projectcube from "../../assets/projectcube.jpg";
import captivote from "../../assets/captivote.jpg";
import avatarify from "../../assets/avatarify.jpg";
import { LaptopControls } from "../LaptopControls";
import { ContactInfo } from "../ContactInfo";
import { ProjectDialog } from "../ProjectDialog";

export const Cube = () => {
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const clickTimeout = useRef<number | null>(null);
  const clickCount = useRef(0);

  const [openDialog, setOpenDialog] = useState(false);
  const [projectName, setProjectName] = useState<string | null>(null);
  const [showInstructions, setShowInstructions] = useState(true);

  const textureLoader = new THREE.TextureLoader();

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
      {
        showInstructions && (
          <LaptopControls
            setShowInstructions={setShowInstructions} 
          />
        )
      }
      <ContactInfo />
      <ProjectDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        projectName={projectName} 
      />
    </div>
  );
};
