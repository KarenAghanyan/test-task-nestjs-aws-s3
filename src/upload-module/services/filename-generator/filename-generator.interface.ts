
export enum Extension {
	PNG = 'png',
	JPEG = 'jpeg',
	BMP = 'bmp',
	GIF = 'gif'
}

export type ExtensionType = keyof typeof Extension;
export interface IFilenameService {
	generateRandomName: (extension: ExtensionType) => string;
}