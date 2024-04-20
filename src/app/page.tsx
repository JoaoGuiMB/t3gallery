import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/794b32f7-2cb3-488e-a224-ac631afeab63-289iq.jpeg",
  "https://utfs.io/f/9d604652-aaa1-42d2-9155-8ad4eff68e9d-m018fb.jpg",
  "https://utfs.io/f/09d42779-a082-46be-a51f-d494b2770a9e-a2mc8q.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="flex flex-wrap gap-4">
      {[...mockImages, ...mockImages, ...mockImages].map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt="a" />
        </div>
      ))}
    </main>
  );
}