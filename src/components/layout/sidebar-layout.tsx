'use client';

import SidebarNav from '@/components/layout/sidebar-nav';
import TopBar from '@/components/layout/top-bar'; // Import the TopBar
import { ScrollArea } from '@/components/ui/scroll-area'; // Import ScrollArea

export default function SidebarLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // Changed to flex-row to place sidebar and main content side-by-side
        <div className="flex flex-row h-full w-full">
            {/* Sidebar */}
            {/* Ensure sidebar doesn't shrink and has a fixed width */}
            <div className="flex-shrink-0 hidden md:block">
                <SidebarNav />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden bg-background"> {/* Changed background */}
                 {/* Top Bar */}
                 <TopBar />

                 {/* Scrollable Page Content */}
                 {/* Wrap children in ScrollArea for independent scrolling */}
                 <ScrollArea className="flex-1 scrollbar-thin">
                     {children}
                 </ScrollArea>
            </div>
        </div>
    );
}
