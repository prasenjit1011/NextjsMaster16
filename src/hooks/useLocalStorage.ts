"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load value from localStorage after component mounts
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);

      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error("Error reading localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, [key]);

  // Save value to localStorage
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving localStorage:", error);
    }
  };

  // Remove value
  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing localStorage:", error);
    }
  };

  return {
    value: storedValue,
    setValue,
    removeValue,
    isLoaded,
  };
}