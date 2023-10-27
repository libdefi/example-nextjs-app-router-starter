import "./global.css";

import { dir } from "i18next";
import { languages } from "../i18n/settings";

export function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
	children,
	params: { lng },
}: {
	children: React.ReactNode;
	params: {
		lng: string;
	};
}) {
	return (
		<html lang={lng} dir={dir(lng)}>
			<body>
				<section className="mx-auto max-w-2xl px-8 py-12 lg:max-w-7xl">{children}</section>
			</body>
		</html>
	);
}
