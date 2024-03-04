import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const UpdateAvatar = () => {
  return (
    <div className="flex items-center gap-7">
      <Avatar className="aspect-square h-[108px] w-[108px] ">
        <AvatarImage
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="@shadcn"
          className="object-cover"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Button size="sm" variant="destructive">
            Remove
          </Button>
          <Button size="sm" variant="outline">
            Change Photo
          </Button>
        </div>
        <p className="text-sm font-medium opacity-40">
          or drag and drop (SVG, PNG, JPG)
        </p>
      </div>
    </div>
  );
};
