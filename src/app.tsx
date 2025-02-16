import { StrictMode, Suspense } from 'react';
import './styles.css';
import { ClientComponent } from './client-component';

export default function App() {
	console.log('App Rendered');

	return (
		<StrictMode>
			<strong>HELLO FROM THE SERVER</strong>
			<button onClick={() => console.log('foo!')}>
				FOO
			</button>
			<Suspense fallback={<div>Loading 1</div>}>
				<Sleep time={5_000} />
			</Suspense>
			<Suspense fallback={<div>Loading 2</div>}>
				<Sleep time={2_000} />
			</Suspense>
			<Suspense fallback={<div>Loading 3</div>}>
				<Sleep time={10_000} />
			</Suspense>
			<ClientComponent>
				<strong>Some child from a server component</strong>
			</ClientComponent>
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