import { ProjectComponentBasicProps } from "./projectDialog.types";

export const ProjectMedia = ({
  project,
}: ProjectComponentBasicProps) => (
  <>
    {project?.video ? (
      <video
        src={project.video}
        controls
        style={{
          maxWidth: "81%",
          maxHeight: "70%",
          borderRadius: "8px",
          marginLeft: '1rem',
        }}
      />
    ) : project?.mainImage ? (
      <img
        src={project.mainImage}
        alt={project.title || "Image"}
        style={{
          maxWidth: "81%",
          maxHeight: "70%",
          borderRadius: "8px",
          marginLeft: '1rem',
        }}
      />
    ) : (
      <p>No media available</p>
    )}
  </>
)