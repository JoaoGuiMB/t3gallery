import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/db/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} alt="a" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-wrap gap-4">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          <h1>Please Sign in above</h1>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="h-full w-full">
          <h1>Gallery</h1>
          <Images />
        </div>
      </SignedIn>
    </main>
  );
}
