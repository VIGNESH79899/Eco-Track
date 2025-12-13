import { Navbar } from './Navbar';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';
import BackgroundTree from "@/components/ui/BackgroundTree";
import RightTopLogo from "@/components/ui/RightTopLogo";


export function Layout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      
      {/* 🌳 Transparent background tree */}
      <BackgroundTree />

      {/* App content */}
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Outlet />
        </main>
      </div>
      <BackgroundTree />
      <RightTopLogo />


    </div>
  );
}