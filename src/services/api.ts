import axios from "axios";
import type { Company, Location, Asset } from "../types";

const API_BASE_URL = "https://fake-api.tractian.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const apiService = {
  // Get all companies
  getCompanies: async (): Promise<Company[]> => {
    const response = await api.get("/companies");
    return response.data;
  },

  // Get locations for a specific company
  getLocations: async (companyId: string): Promise<Location[]> => {
    const response = await api.get(`/companies/${companyId}/locations`);
    return response.data;
  },

  // Get assets for a specific company
  getAssets: async (companyId: string): Promise<Asset[]> => {
    const response = await api.get(`/companies/${companyId}/assets`);
    return response.data;
  },
};
