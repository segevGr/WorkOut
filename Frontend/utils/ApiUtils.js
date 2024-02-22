import { ApiError } from "./ApiError";

export async function handleApiResponse(response) {
  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.message || "Unknown error";
    const statusCode = response.status;
    throw new ApiError(errorMessage, statusCode);
  }
  if (response.status === 204) {
    return;
  }
  return response.json();
}

export async function handleRequests(reqUrl, method, token, body) {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const options = {
    method: method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(reqUrl, options);
  return response;
}
