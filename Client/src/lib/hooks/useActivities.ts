import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

const fetchActivities = async () => {
  const response = await agent.get<Activity[]>("/activities");
  return response.data;
};

export function useActivities(activityId?: string) {
  const queryClient = useQueryClient();
  const { data: activities, isLoading } = useQuery({
    queryKey: ["activities"],
    queryFn: fetchActivities,
  });

  const { data: activity, isLoading: isLoadingActivity } = useQuery({
    queryKey: ["activity", activityId],
    queryFn: async () => {
      const response = await agent.get<Activity>(`/activities/${activityId}`);
      return response.data;
    },
    enabled: !!activityId,
  });

  const updateActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.put("/activities", activity);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["activities"],
      });
    },
  });

  const createActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      const response = agent.post("/activities", activity);
      return (await response).data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["activities"],
      });
    },
  });

  const deleteActivity = useMutation({
    mutationFn: async (activityId: string) => {
      await agent.delete(`/activities/${activityId}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["activities"],
      });
    },
  });

  return {
    activities,
    isLoading,
    updateActivity,
    createActivity,
    deleteActivity,
    activity,
    isLoadingActivity,
  };
}
