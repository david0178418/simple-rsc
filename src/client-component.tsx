"use client";

// Still need to figure out interactive components

import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export function ClientComponent({children}: Props) {
	console.log('ClientComponent Rendered - Still figuring out this side');
	return (
		<div>
			<button onClick={() => console.log("client component")}>
				Client Component Log
			</button>
			<p>
				{children}
			</p>
		</div>
	)
}