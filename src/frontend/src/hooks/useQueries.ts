import { useMutation } from "@tanstack/react-query";
import type { LeadRequest } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitEnquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (lead: LeadRequest) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitEnquiry(lead);
    },
  });
}
