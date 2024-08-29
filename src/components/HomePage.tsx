import NavBar from "@/components/NavBar";
import ImageGallery from "@/components/ImageGallery";
import { homeImages } from "@/lib/images";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-between p-6 lg:p-24">
      <NavBar />
      <ImageGallery images={homeImages} />
    </main>
  );
}
