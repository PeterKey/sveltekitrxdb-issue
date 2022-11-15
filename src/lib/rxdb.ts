import { dev } from '$app/environment';
import { createRxDatabase, type RxCollection } from 'rxdb';
import type { RxDatabase } from 'rxdb';
import { getRxStorageMemory } from 'rxdb/plugins/memory';

async function createDatabase(): Promise<RxDatabase<RxCollection>> {
	if (dev) {
		const { RxDBDevModePlugin } = await import('rxdb/plugins/dev-mode');
		const { addRxPlugin } = await import('rxdb');
		addRxPlugin(RxDBDevModePlugin);
	}

	const database = await createRxDatabase<RxDatabase<RxCollection>>({
		name: 'databasetest',
		storage: getRxStorageMemory()
	});

	return database;
}

let dbPromise: Promise<RxDatabase<RxCollection>>;
export const getDatabase = () => {
	if (!dbPromise) dbPromise = createDatabase();
	return dbPromise;
};
