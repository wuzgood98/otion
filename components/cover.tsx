"use client";

import { useMutation } from "convex/react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Skeleton } from "@/components/ui/skeleton";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useEdgeStore } from "@/lib/edgestore";
import { cn } from "@/lib/utils";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export function Cover({ url, preview }: CoverImageProps) {
  const { edgestore } = useEdgeStore();
  const params = useParams();
  const coverImage = useCoverImage();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  async function removeCover() {
    if (url) {
      await edgestore.publicFiles.delete({
        url,
      });
    }

    removeCoverImage({
      id: params.documentId as Id<"documents">,
    });
  }

  return (
    <div
      className={cn(
        "group relative h-[35vh] w-full",
        !url && "h-[12vh]",
        url && "bg-muted",
      )}
    >
      {!!url && (
        <Image src={url} fill alt="Cover image" className="object-cover" />
      )}
      {url && !preview && (
        <div className="absolute bottom-5 right-5 flex items-center gap-x-2 opacity-0 group-hover:opacity-100">
          <Button
            type="button"
            aria-label="Change cover image"
            onClick={() => coverImage.replace(url)}
            className="text-xs text-muted-foreground"
            variant="outline"
            size="sm"
          >
            <Icon name="image" className="mr-2" />
            Change cover
          </Button>
          <Button
            type="button"
            aria-label="Remove cover image"
            onClick={removeCover}
            className="text-xs text-muted-foreground"
            variant="outline"
            size="sm"
          >
            <Icon name="close" className="mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
}

Cover.Skeleton = function CoverSkeleton() {
  return <Skeleton className="h-[12vh] w-full" />;
};
