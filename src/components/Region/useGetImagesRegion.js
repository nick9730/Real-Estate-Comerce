import {
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { GetOneImage } from "../../servers/apiRegions";

import { useParams } from "react-router-dom";
import { useGetRegions } from "./useGetRegions";
import { useState } from "react";

export function useGetImagesRegion() {
	const queryClient = useQueryClient();
	const { name } = useParams();

	const { data, isLoading } = useQuery({
		queryFn: () => GetOneImage(name),
		queryKey: ["imageRegions"],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["imageRegions"],
			});
		},
	});

	queryClient.prefetchQuery({
		queryKey: ["imageRegions"],
	});

	return { data, isLoading, name };
}
