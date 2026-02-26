import { UserButton } from "@clerk/nextjs";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto md:ml-64">
        <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-end px-6">
            <UserButton afterSignOutUrl="/" />
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
