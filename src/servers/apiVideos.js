import supabase from "./supabase";

export async function getVideos() {
	let { data, error } = await supabase
		.from("videos")
		.select("*");

	if (error) throw new Error("Videos couldnt be loaded");

	return data;
}
