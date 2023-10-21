"use client";

import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

import { api } from "@/convex/_generated/api";

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  function createNewNote(): void {
    const promise = create({ title: "untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`),
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  }

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      {" "}
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="h-auto w-auto dark:hidden"
        priority
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden h-auto w-auto dark:block"
        priority
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Otion
      </h2>
      <Button type="button" aria-label="Create a note" onClick={createNewNote}>
        <Icon name="plusCircle" className="mr-2" />
        Create a note
      </Button>
    </div>
  );
}
