"use client";

import * as React from "react";
import { Search, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (query: string) => void;
  onClear?: () => void;
  loading?: boolean;
  showClearButton?: boolean;
  searchDelay?: number;
}

export default function SearchInput({
  className,
  onSearch,
  onClear,
  loading = false,
  showClearButton = true,
  searchDelay = 300,
  ...props
}: SearchInputProps) {
  const [query, setQuery] = React.useState(props.value?.toString() || "");
  const [debouncedQuery, setDebouncedQuery] = React.useState(query);
  
  // Debounce search query
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, searchDelay);

    return () => clearTimeout(timer);
  }, [query, searchDelay]);

  // Trigger search when debounced query changes
  React.useEffect(() => {
    if (onSearch && debouncedQuery !== props.value) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch, props.value]);

  const handleClear = () => {
    setQuery("");
    setDebouncedQuery("");
    if (onClear) {
      onClear();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(query);
    }
    if (props.onKeyDown) {
      props.onKeyDown(e);
    }
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        {...props}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={cn(
          "pl-10 pr-10",
          className
        )}
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
        {loading && (
          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
        )}
        {showClearButton && query && !loading && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 hover:bg-transparent"
            onClick={handleClear}
          >
            <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
          </Button>
        )}
      </div>
    </div>
  );
}