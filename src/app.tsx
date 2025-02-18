import { StrictMode, Suspense } from 'react';

export default function App() {
	console.log('App Rendered');

	return (
		<StrictMode>
			<strong>HELLO FROM THE SERVER!</strong>
			<Suspense fallback={<div>Loading 1</div>}>
				<Sleep time={3_000} />
			</Suspense>
			<Suspense fallback={<div>Loading 2</div>}>
				<Sleep time={1_000} />
			</Suspense>
		</StrictMode>
	);
}

interface SleepProps {
	time: number;
}

async function Sleep({time}: SleepProps) {
	console.log(`Sleep Rendered with time: ${time}`);

	await sleep(time);

	return (
		<div>
			Hi after {time}ms!
		</div>
	)
}

async function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}