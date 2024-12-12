import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import ProductsPage from "@/routes/products/page";
import InventoryPage from "@/routes/inventory/page";
import ReportsPage from "@/routes/reports/page";
import ReviewsPage from "@/routes/reviews/page";
import MarketplacePage from "@/routes/marketplace/page";
import SkuCostingPage from "@/routes/sku-costing/page";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "products",
                    element: <ProductsPage />,
                },
                {
                    path: "inventory",
                    element: <InventoryPage />,
                },
                {
                    path: "reports",
                    element: <ReportsPage />,
                },
                {
                    path: "reviews",
                    element: <ReviewsPage />,
                },
                {
                    path: "marketplace",
                    element: <MarketplacePage />,
                },
                {
                    path: "sku-costing",
                    element: <SkuCostingPage />,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
