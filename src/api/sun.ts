import client from '@/services/naluri/client';

export function getCircumference() {
	return client.get("/api/v1/sun");
}