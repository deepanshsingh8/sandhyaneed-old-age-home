import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getSEO, pageSEO } from "@/lib/seo";

// Visible counterpart of the BreadcrumbList structured data in lib/seo.ts.
export default function PageBreadcrumbs() {
  const { pathname } = useLocation();
  const page = pageSEO[getSEO(pathname).pathname];
  if (!page || pathname === "/") return null;
  return (
    <Breadcrumb className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-3">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{page.label}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
