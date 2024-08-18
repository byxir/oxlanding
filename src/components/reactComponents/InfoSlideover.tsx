import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export function InfoSlideover({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>hi</SheetContent>
    </Sheet>
  );
}
