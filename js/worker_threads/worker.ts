import { parentPort, workerData } from "worker_threads";

function calculatePrimes(num: number): number[] {
	let primes = [];
	for (let i = 2; i <= num; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}
	return primes;
}

function isPrime(num: number): boolean {
	for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
}

const result = calculatePrimes(workerData.num);
parentPort?.postMessage(result);
