import { Link, useLocation, useParams } from "react-router-dom";
import { productsMap } from "@/common/mocks/data";
import { useMemo } from "react";

export const Breadcrumb = () => {
  const location = useLocation();
  const { id } = useParams();

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );

  const page = searchParams.get("page");

  const partsOfPath = useMemo(
    () => location.pathname.split("/").filter(Boolean),
    [location.pathname],
  );

  const currentProduct = useMemo(() => {
    if (!id) return undefined;
    return productsMap.get(id);
  }, [id]);

  const breadcrumbItems = useMemo(() => {
    const makeLink = (index: number) => {
      const path = "/" + partsOfPath.slice(0, index + 1).join("/");
      return page ? `${path}?page=${page}` : path;
    };
    return [
      { label: "Início", to: "/", isLast: false },
      ...partsOfPath.map((part, index) => {
        const isProductId = id && part === id;
        const isLastItem = index === partsOfPath.length - 1;
        const label =
          isProductId && currentProduct
            ? currentProduct.name
            : part.split("-").join(" ");

        return {
          label,
          to: makeLink(index),
          isLast: isLastItem,
        };
      }),
    ];
  }, [currentProduct, id, page, partsOfPath]);

  return (
    <nav className="sm:text-body-base-500 text-xs">
      {breadcrumbItems.map((item) => (
        <span key={item.to}>
          {!item.isLast ? (
            <>
              <Link
                to={item.to}
                className="text-theme-gray-dark capitalize hover:underline"
              >
                {item.label}
              </Link>
              <span className="text-theme-black mx-2">&gt;</span>
            </>
          ) : (
            <span className="text-theme-black capitalize">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};
