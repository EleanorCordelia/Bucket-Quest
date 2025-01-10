import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

const SearchInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
            "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
            className,
        )}
      >
      <Search />
      <input
        type="search"
        className={cn(
          "w-full p-2 text-xl placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        )}
        ref={ref}
        {...props}
      />
      </div>
    )
  }
)
SearchInput.displayName = "SearchInput"

export { SearchInput }
