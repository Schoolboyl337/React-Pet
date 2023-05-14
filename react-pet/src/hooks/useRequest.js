import { useState } from "react";

export const useRequest = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const featch = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.massage);
    } finally {
      setIsLoading(false);
    }
  };

  return [featch, error, isLoading];
};
