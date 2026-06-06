export default function PageLoader() {
  return (
    <div className="flex-grow flex items-center justify-center py-24">
      <div className="flex flex-col items-center gap-3 text-on-surface-variant">
        <div
          className="h-8 w-8 animate-spin rounded-full border-2 border-outline-variant border-t-primary"
          aria-hidden="true"
        />
        <p className="text-sm">Loading...</p>
      </div>
    </div>
  );
}
