import axios, { type AxiosInstance } from "axios";

declare global {
  interface Window {
    redcap_csrf_token?: string;
  }
}

const module_prefix = "fhir_snapshot";
const page = "api";

interface REDCapQueryParams {
  pid: string|null
  page: string
  type: string
  prefix: string
  redcap_csrf_token?: string|null
}

const getRedCapQueryParams = () => {
  let params = new URLSearchParams(location.search);
  // get PID from current location
  let pid = params.get("pid");
  
  let query_params: REDCapQueryParams = {
    pid,
    page,
    // content: "externalModule",
    type: "module",
    prefix: module_prefix,
  };
  if(window.redcap_csrf_token) query_params.redcap_csrf_token = window.redcap_csrf_token

  // if(window.redcap_csrf_token) query_params.redcap_csrf_token = window.redcap_csrf_token // csrf token for post requests
  return query_params;
};

export default () => {
  const apiClient: AxiosInstance = axios.create({
    baseURL: "/api",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-Requested-With": "XMLHttpRequest", // set header for REDCap ajax
    },
  });

  // Automatically attach CSRF token to all POST requests
  apiClient.interceptors.request.use((config) => {
    const redcapParams = getRedCapQueryParams();

    config.params = {
      ...(config.params || {}),
      ...redcapParams,
    };
    if (config.method?.toUpperCase() === "POST") {
      const token = window.redcap_csrf_token ?? "no csrf token";

      // Add CSRF token to data or params depending on content type
      if (config.headers["Content-Type"] === "application/json") {
        config.data = {
          ...(config.data || {}),
          redcap_csrf_token: token,
        };
      } else {
        // For form-encoded requests
        const params = new URLSearchParams(config.data || {});
        params.set("redcap_csrf_token", token);
        config.data = params;
      }
    }

    return config;
  });

  return apiClient;
};
