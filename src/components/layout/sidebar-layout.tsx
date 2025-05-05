
'use client';

import SidebarNav from '@/components/layout/sidebar-nav';
import TopBar from '@/components/layout/top-bar'; // Import the TopBar
import { ScrollArea } from '@/components/ui/scroll-area'; // Import ScrollArea
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'; // Import Resizable components

export default function SidebarLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // Use ResizablePanelGroup for adjustable sidebar width
        <ResizablePanelGroup
            direction="horizontal"
            className="h-full w-full"
            autoSaveId="spotify-sidebar-layout" // Persist layout adjustments
        >
            {/* Sidebar Panel */}
            <ResizablePanel
                defaultSize={25} // Initial size percentage (adjust as needed)
                minSize={15} // Minimum width percentage
                maxSize={40} // Maximum width percentage
                collapsible={true} // Allow collapsing
                collapsedSize={4} // Width when collapsed (icon-only view) - might need custom logic for true icon only
                className="hidden md:block min-w-[80px] max-w-[400px]" // Hide on mobile, set min/max pixel widths
            >
                 <SidebarNav />
            </ResizablePanel>

            {/* Resizable Handle */}
            <ResizableHandle withHandle className="hidden md:flex bg-border w-1.5 hover:bg-primary transition-colors" />

            {/* Main Content Panel */}
            <ResizablePanel defaultSize={75} className="flex-1 flex flex-col overflow-hidden bg-background"> {/* Changed background */}
                 {/* Top Bar */}
                 <TopBar />

                 {/* Scrollable Page Content */}
                 {/* Wrap children in ScrollArea for independent scrolling */}
                 <ScrollArea className="flex-1 scrollbar-thin">
                     {/* Add padding to main content area */}
                     <div className="p-0 md:p-0"> {/* Remove padding here, let pages handle it */}
                        {children}
                     </div>
                 </ScrollArea>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
