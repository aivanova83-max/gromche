import { Skeleton } from "@/components/ui/skeleton";

export const PaymentWidget = () => {
  return (
    <div className="relative" style={{ minHeight: 300 }}>
      <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-lg border border-border bg-card">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-32 w-full" />
        <p className="text-sm text-muted-foreground text-center">
          Виджет оплаты будет подключён в ближайшее время
        </p>
      </div>
    </div>
  );
};
