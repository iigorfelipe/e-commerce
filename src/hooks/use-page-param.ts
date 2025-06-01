import { useSearchParams } from "react-router-dom";

export const usePageParam = (defaultPage = 1) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") || String(defaultPage), 10);

  const setPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    setSearchParams(params);
  };

  return { page, setPage };
};
