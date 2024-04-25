import { clerkClient } from "@clerk/nextjs/server";
import { deleteMyImage, getMyImage } from "~/server/db/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getMyImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="w- flex h-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="flex-shrink object-contain" />;
      </div>

      <div className="w-48 flex-shrink-0 flex-col gap-2 border-l-2">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteMyImage(props.id);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
