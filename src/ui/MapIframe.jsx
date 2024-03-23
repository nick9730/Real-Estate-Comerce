import styled from "styled-components";

// https://www.bing.com/images/search?view=detailV2&ccid=PjDVHcMa&id=F377B51FFC9282A25C4C4CCC3AD5446D7C80FEC6&thid=OIP.PjDVHcMakpxfnS00V2XOaAHaFj&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2fd6%2ff8%2f62%2fd6f86231062d5904640de79eece9f8c0.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3e30d51dc31a929c5f9d2d345765ce68%3frik%3dxv6AfG1E1TrMTA%26pid%3dImgRaw%26r%3d0&exph=750&expw=1000&q=Modern+Web+Contact+Design&simid=608045263860294234&FORM=IRPRST&ck=245F131BB7163429BDC3F7143201532E&selectedIndex=11&itb=0&ajaxhist=0&ajaxserp=0

const Iframe = styled.iframe`
	width: 100%;

	filter: brightness(50%);
	border: 0;
	&:hover {
		filter: brightness(100%);
	}
`;

export default function MapIframe({ height }) {
	return (
		<Iframe
			style={{ height: `${height}` }}
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.715541472616!2d23.978588726720613!3d40.32647027145436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8c8fbbefb5a17%3A0x3949424c546c20d3!2zzp_Phc-BzrHOvc6_z43PgM6_zrvOtw!5e0!3m2!1sel!2sgr!4v1705623976580!5m2!1sel!2sgr"
			title="fdsa"
		></Iframe>
	);
}
