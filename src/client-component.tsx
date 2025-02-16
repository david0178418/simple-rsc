"use client";

import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export function ClientComponent({children}: Props) {
	console.log('ClientComponent Rendered');
	return (
		<div>
			<button onClick={() => console.log("client component")}>
				Client Component Log
			</button>
			<button onClick={() => fetch('/some-endpoint')}>
				Client Component Fetch
			</button>
			<p>
				{children}
			</p>
		</div>
	)
}