'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Search as SearchIcon, Download, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SidebarNav from './sidebar-nav'; // Import SidebarNav for mobile sheet
import { SpotifyLogo } from '@/components/icons/spotify-logo'; // Import logo for mobile sheet
import Link from 'next/link';

export default function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const isSearchPage = pathname === '/search';
  const isHomePage = pathname === '/';

  // Basic history navigation (replace with actual router logic if needed)
  const handleBack = () => router.back();
  const handleForward = () => router.forward();

  return (
       null
  );
}


