import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <Link href="/settings">
        <Button>Go to settings</Button>
      </Link>
    </main>
  );
}
