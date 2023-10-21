import * as React from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronsLeftRight,
  FileIcon,
  PlusCircle,
  Search,
  Settings,
  ArrowRight,
  Loader,
  ChevronsLeft,
  MenuIcon,
  Trash,
  Plus,
  MoreHorizontal,
  Undo,
  Check,
  Copy,
  Globe,
  ImageIcon,
  X,
  UploadCloudIcon,
  Smile,
  LucideProps,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type IconType = LucideIcon;

const Icons = {
  settings: Settings,
  plusCircle: PlusCircle,
  plus: Plus,
  search: Search,
  file: FileIcon,
  chevronsLR: ChevronsLeftRight,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  chevronsLeft: ChevronsLeft,
  arrowRight: ArrowRight,
  loader: Loader,
  menu: MenuIcon,
  trash: Trash,
  more: MoreHorizontal,
  undo: Undo,
  check: Check,
  copy: Copy,
  globe: Globe,
  image: ImageIcon,
  close: X,
  upload: UploadCloudIcon,
  smile: Smile,
};

interface IconProps extends LucideProps {
  name: keyof typeof Icons;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, className, ...props }, ref) => {
    const Icon = Icons[name];
    return (
      <Icon
        {...props}
        className={cn("h-4 w-4 text-muted-foreground", className)}
        ref={ref}
      />
    );
  },
);
Icon.displayName = "Icon";

export { Icons, Icon };
