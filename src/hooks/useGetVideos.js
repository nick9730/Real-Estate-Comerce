import {
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { getVideos } from "../servers/apiVideos";

export function useGetVideos() {
	const queryClient = useQueryClient();

	const { data, isLoading } = useQuery({
		queryKey: ["videos"],
		queryFn: getVideos,
		onSettle: () => {
			queryClient.invalidateQueries({
				queryKey: ["videos"],
			});
		},
	});

	return { data, isLoading };
}
