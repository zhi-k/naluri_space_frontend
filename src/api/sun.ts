import client from '@/services/naluri/client';

export interface ISunCircumferenceData {
	success: boolean;
	message: string;
	data: {
		circumference: string;
		pi: string;
		elapsed_time: number;
		decimal_points: number;
	}
}

export async function getCircumference() {
	return await client.get("/api/v1/sun");
}