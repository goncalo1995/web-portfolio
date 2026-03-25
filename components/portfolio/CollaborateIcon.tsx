import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CollaborateIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button variant="outline" className="relative text-sm font-medium rounded-xl h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 hover:text-white w-fit overflow-hidden cursor-pointer" onClick={onClick}>
      <span className="relative z-10 transition-all duration-500">
        Let's Collaborate
      </span>
      <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </div>
    </Button>
  );
};

export default CollaborateIcon;