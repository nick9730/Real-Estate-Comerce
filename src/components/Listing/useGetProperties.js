import {
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { GetProperties } from "../../servers/apiProperties";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../Helpers/constants";

export function useGetProperties() {
	const [searchParams] = useSearchParams();
	const queryClient = useQueryClient();

	const page = !searchParams.get("page")
		? 1
		: searchParams.get("page");

	const { data: { data, count } = {}, isLoading } = useQuery({
		queryKey: ["properties", page],
		queryFn: () => GetProperties({ page }),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["properties", page],
			});
		},
	});

	const pageCount = Math.ceil(count / PAGE_SIZE);

	if (page < pageCount)
		queryClient.prefetchQuery({
			queryKey: ["properties", page + 1],
			queryFn: () => GetProperties({ page: page + 1 }),
		});

	if (page > 1)
		queryClient.prefetchQuery({
			queryKey: ["properties", page - 1],
			queryFn: () => GetProperties({ page: page - 1 }),
		});

	return { isLoading, data, count };
}
