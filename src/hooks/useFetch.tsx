import { useState, useCallback } from "react";

interface data {
  roomId?: string;
  name?: string;
  uuid?: string;
  removeData?: boolean;
  message: string;
}

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<data>();

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setData(responseData);
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    data,
    sendRequest,
  } as const;
};

export default useFetch;
