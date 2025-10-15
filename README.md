**GeoSplat** is a rendering technology utilizing an optimized data format to enable the interactive, photo-realistic, high-fidelity visualization of extremely large 3D environments.

The first public implementation, demonstrating its application on massive scenes (containing billions of "splats") with streamable **Levels of Detail (LODs)** and the ability to compose models from geographical tiles, similar to traditional satellite maps, was recently showcased. This technology is designed to render in real-time within a web browser using **WebGPU**. It was presented by [MapTiler](https://www.maptiler.com/) at their CONNECT25 user conference, featuring demonstrations on models of San Francisco and Poland.

This technology is fundamentally powered by **Gaussian Splatting (3DGS)**, a novel method in 3D graphics, rendering, and computer vision. Instead of using traditional polygonal meshes or point clouds, 3DGS represents and visualizes a scene using millions of tiny, learnable, translucent ellipsoids—referred to as 3D Gaussians or "splats." This explicit representation allows for state-of-the-art visual quality, including complex view-dependent effects, while maintaining the computational efficiency required for real-time rendering.

## User-Friendly and AI-Ready

Crucially, the explicit nature of the Gaussian Splatting data structure makes it uniquely **human-editable** and highly **compatible with Generative AI (GenAI)** approaches.

- **Human Editability**: Unlike black-box neural network models, the discrete, volumetric "splats" can be easily manipulated, moved, or deleted using standard 3D editing tools, making it straightforward for artists and technicians to refine or correct geometric features.

- **Generative AI Integration**: The format is extremely friendly to GenAI models for tasks like visual improvement, material correction, or generating complex edits directly from text prompts (text-to-3D editing). This compatibility allows for rapid, sophisticated changes to be applied directly to the 3D data, accelerating the creation and customization of massive digital twin environments.

**GeoSplats are the culmination of scientific research and development activities carried out by the MapTiler team, building upon the principles of 3D Gaussian Splatting to achieve massive geospatial data visualization.**
