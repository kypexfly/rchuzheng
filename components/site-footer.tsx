export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900/25 px-2 py-8 border-t dark:border-t-slate-700/25">
      <div className="hidden sm:flex container w-full flex-row justify-center">
        <p className="text-muted-foreground text-sm">Ricardo Chu / Ecuador</p>
      </div>
    </footer>
  );
}
