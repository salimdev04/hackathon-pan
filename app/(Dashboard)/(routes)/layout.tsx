import { Sidebar } from "@/components/Sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
