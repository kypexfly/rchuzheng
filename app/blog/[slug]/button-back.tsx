"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";

const ButtonBack = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} variant="ghost">
      <Icons.back className="mr-2" />
      Back
    </Button>
  );
};

export default ButtonBack;
