import { ApiError } from "./ApiError";

export async function handleApiResponse(response) {
  if (!response.ok) {
    let errorMessage = null;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const errorData = await response.json();
      errorMessage = errorData.message || "Unknown error";
    } else {
      errorMessage = await response.text();
    }
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
