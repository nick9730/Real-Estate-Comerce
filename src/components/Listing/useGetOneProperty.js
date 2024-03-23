import { GetOneProperty } from "../../servers/apiProperties";
import {
	useQueryClient,
	useQuery,
} from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function useGetOneProperty() {
	const queryClient = useQueryClient();

	const { id } = useParams();

	const { data, isLoading } = useQuery({
		queryKey: ["property"],
		queryFn: () => GetOneProperty(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["property"],
			});
		},
	});
	return { data, isLoading };
}
