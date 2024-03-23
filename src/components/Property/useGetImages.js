import { useParams } from "react-router-dom";
import {
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { GetImages } from "../../servers/apiProperties";

export default function useGetImages() {
	const { id } = useParams();

	const queryClient = useQueryClient();

	const { data, isLoading } = useQuery({
		queryFn: () => GetImages(id),
		queryKey: ["imagesProperties"],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["imagesProperties"],
			});
		},
	});

	return { isLoading, data };
}
