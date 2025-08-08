import { useQuery } from "@tanstack/react-query";
import { apiService } from "../services/api";

export const useCompanies = () => {
  return useQuery({
    queryKey: ["companies"],
    queryFn: apiService.getCompanies,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
