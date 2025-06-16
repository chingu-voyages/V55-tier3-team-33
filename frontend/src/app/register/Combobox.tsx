import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Combobox({
  id,
  items,
  value,
  setValue,
  defaultPlaceholder,
  searchPlaceholder,
}: {
  // items: Array<{ label: string; value: string }>;
  id?: string;
  items: string[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  defaultPlaceholder: string;
  searchPlaceholder: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger id={id} asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
        >
          {!value ? defaultPlaceholder : items.find((item) => item === value)}
          <ChevronsUpDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>No X found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item}
                  value={item}
                  onSelect={(current) => {
                    setValue(current === value ? "" : current);
                    setOpen(false);
                  }}
                >
                  {item}
                  <Check
                    className={value === item ? "opacity-100" : "opacity-0"}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
