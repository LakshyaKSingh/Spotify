'use client';

import SidebarNav from '@/components/layout/sidebar-nav';

export default function SidebarLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-full">
            {/* Sidebar */}
            <div className="hidden md:flex flex-shrink-0">
                <SidebarNav />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                 {/* Header/Topbar could go here if needed */}
                 {/* Example: <TopBar /> */}

                 {/* Page Content */}
                {children}
            </div>
        </div>
    );
}
