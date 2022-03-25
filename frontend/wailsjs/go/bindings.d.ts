export interface go {
  "main": {
    "App": {
		Close():Promise<void>
		Greet(arg1:string):Promise<string>
    },
  }

}

declare global {
	interface Window {
		go: go;
	}
}
