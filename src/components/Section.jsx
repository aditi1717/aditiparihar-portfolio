export default function Section({
	children,
	className = " ",
	innerClassName = "",
}) {
	console.log(className);

	return (
		<section className={`w-full ${className}`}>
			<div className={`max-w-[900px] px-6 mx-auto ${innerClassName}`}>
				{children}
			</div>
		</section>
	);
}
