"use client";

import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Otion</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        Otion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild className="group">
          <Link href="/documents">
            Enter Otion
            <Icons.arrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 motion-safe:transition-transform motion-reduce:transition-none" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button className="group">
            Get Otion free
            <Icons.arrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 motion-safe:transition-transform motion-reduce:transition-none" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
