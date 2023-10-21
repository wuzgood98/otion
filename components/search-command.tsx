"use client";

import { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Icon } from "@/components/ui/icons";

import { useSearch } from "@/hooks/use-search";
import { api } from "@/convex/_generated/api";
import { Spinner } from "./spinner";

export function SearchCommand() {
  const { user } = useUser();
  const router = useRouter();
  const documents = useQuery(api.documents.getSearch);
  const [isMounted, setIsMounted] = useState(false);

  const toggle = useSearch((store) => store.onOpenChange);
  const isOpen = useSearch((store) => store.isOpen);
  const closeStore = useSearch((store) => store.close);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const onSelect = (id: string) => {
    router.push(`/documents/${id}`);
    closeStore();
  };

  if (!isMounted) {
    return null;
  }

  return (
    <CommandDialog open={isOpen} onOpenChange={closeStore}>
      <CommandInput placeholder={`Search ${user?.fullName}'s Otion...`} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Documents">
          {documents === undefined ? (
            <div className="flex h-full items-center justify-center p-4">
              <Spinner size="lg" />
            </div>
          ) : (
            <>
              {documents.map((document) => (
                <CommandItem
                  key={document._id}
                  value={`${document._id}-${document.title}`}
                  title={document.title}
                  onSelect={() => onSelect(document._id)}
                >
                  {document.icon ? (
                    <p className="mr-2 text-[18px]">{document.icon}</p>
                  ) : (
                    <Icon name="file" className="mr-2 text-foreground" />
                  )}
                  <span>{document.title}</span>
                </CommandItem>
              ))}
            </>
          )}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
