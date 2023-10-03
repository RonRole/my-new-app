declare global {
  interface Window {
    sampleAPI: ISampleAPI;
  }
}

export interface ISampleAPI {
  openDialog: () => Promise<string>;
}
