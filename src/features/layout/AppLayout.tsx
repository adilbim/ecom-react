import { Outlet } from "react-router-dom";
import { Navbar } from "../../ui/Navbar";

export default function AppLayout() {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <div className="py-10">
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
