import { io, Socket } from 'socket.io-client';

type ServerToClientEvents = {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
};

type ClientToServerEvents = {
  hello: () => void;
};

export const webSocketApi = {
  socket: null as null | Socket<ServerToClientEvents, ClientToServerEvents>,

  createConnection() {
    this.socket = io('');
  },

  destroyConnection() {
    this.socket?.disconnect();
    this.socket = null;
  },
};
