import { useIsDesktop } from "@/hooks/use-is-desktop";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Description = ({ description }: { description: string }) => {
  const [expanded, setExpanded] = useState(false);

  const isDesktop = useIsDesktop();

  return (
    <div className="text-body-base-400 flex flex-col gap-2">
      <p className="text-theme-black">Descrição</p>
      <p
        className={`text-theme-gray-dark whitespace-pre-wrap transition-all ${
          !isDesktop && !expanded ? "line-clamp-[5]" : ""
        }`}
      >
        {description}
      </p>

      {!isDesktop && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="-mt-1 flex items-center gap-1 text-blue-600"
        >
          <span> Ver {expanded ? "menos" : "mais"}</span>

          <ChevronDown
            className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
};
