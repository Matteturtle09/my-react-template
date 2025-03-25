import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from "@/components/theme-provider"

export const Route = createRootRoute({
    component: () => (
        <>
            <ThemeProvider>
            <div className='h-full min-h-screen w-full dark:bg-black font-spacemono dark:text-white'>      
                <Outlet />
            </div>
            <TanStackRouterDevtools />
            </ThemeProvider>
        </>
    ),
})