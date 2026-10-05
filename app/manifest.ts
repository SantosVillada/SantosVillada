import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Santos Villada", short_name: "Santos Villada", description: "Desarrollo web, productos digitales e IA aplicada.", start_url: "/", display: "standalone", background_color: "#101210", theme_color: "#101210", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
