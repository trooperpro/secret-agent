import { IRegisteredEventListener, ITypedEventEmitter } from '@secret-agent/commons/eventUtils';
import { IPuppetFrame, IPuppetFrameEvents } from './IPuppetFrame';
import { IPuppetKeyboard, IPuppetMouse } from './IPuppetInput';
import { IPuppetNetworkEvents } from './IPuppetNetworkEvents';
import { IPuppetWorker } from './IPuppetWorker';

export interface IPuppetPage extends ITypedEventEmitter<IPuppetPageEvents> {
  mouse: IPuppetMouse;
  keyboard: IPuppetKeyboard;
  frames: IPuppetFrame[];
  workers: IPuppetWorker[];
  mainFrame: IPuppetFrame;
  opener?: IPuppetPage;

  isClosed: boolean;
  navigate(url: string, options?: { referrer?: string }): Promise<void>;
  goBack(): Promise<void>;
  goForward(): Promise<void>;
  close(): Promise<void>;
  bringToFront(): Promise<void>;
  popupInitializeFn?: (
    page: IPuppetPage,
    openParams: { url: string; windowName: string },
  ) => Promise<void>;

  getIndexedDbDatabaseNames(): Promise<{ frameId: string; origin: string; databases: string[] }[]>;
  setJavaScriptEnabled(enabled: boolean): Promise<void>;

  evaluate<T>(expression: string): Promise<T>;
  addNewDocumentScript(script: string, isolateFromWebPageEnvironment: boolean): Promise<void>;
  addPageCallback(
    name: string,
    onCallback: (payload: any, frameId: string) => any,
  ): Promise<IRegisteredEventListener>;
}

export interface IPuppetPageEvents extends IPuppetFrameEvents, IPuppetNetworkEvents {
  close: undefined;
  load: undefined;
  worker: { worker: IPuppetWorker };
  crashed: { error: Error };
  console: { frameId: string; type: string; message: string; location: string };
  'page-error': { frameId: string; error: Error };
}