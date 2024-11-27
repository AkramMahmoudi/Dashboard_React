import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, addUser } from "../api";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"], // Query key
    queryFn: fetchUsers, // Query function
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2, // Retry failed requests up to 2 times
    refetchOnWindowFocus: false, // Do not refetch on window focus
  });
};
export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUser, // POST function
    onSuccess: () => {
      // Invalidate and refetch users on successful addition
      queryClient.invalidateQueries(["users"]);
    },
  });
};
