import { useQuery } from "@tanstack/react-query";
import { apiService } from "../services/api";

export const useCompanyData = (companyId: string | null) => {
  const locationsQuery = useQuery({
    queryKey: ["locations", companyId],
    queryFn: () => apiService.getLocations(companyId!),
    enabled: !!companyId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const assetsQuery = useQuery({
    queryKey: ["assets", companyId],
    queryFn: () => apiService.getAssets(companyId!),
    enabled: !!companyId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    locations: locationsQuery.data || [],
    assets: assetsQuery.data || [],
    isLoading: locationsQuery.isLoading || assetsQuery.isLoading,
    error: locationsQuery.error || assetsQuery.error,
  };
};
