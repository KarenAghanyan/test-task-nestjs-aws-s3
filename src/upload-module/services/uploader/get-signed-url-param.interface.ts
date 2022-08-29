
export enum ContentType {
	PNG = 'image/png',
	JPEG = 'image/jpeg',
	BMP = 'image/bmp',
	GIF = 'image/gif',
}

export type TypeContent = keyof typeof ContentType;

export interface UrlSignParam {
	Bucket: string;
	Key: string;
	Expires: number;
	ContentType: keyof typeof ContentType;
}



export interface UploadParam {
	Bucket: string;
	Key: string;
	ContentType: TypeContent,
	Body: Buffer;
}

export interface GetPresignedParam {
	Bucket: string;
	Key: string;
	ContentType: TypeContent,
}

export interface PutObjectParam {
	Bucket: string;
	Key: string;
	ContentType: TypeContent,
	Body: Buffer;
}