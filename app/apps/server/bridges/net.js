import net from 'net';

export class AppNetBridge {
	constructor(orch) {
		this.orch = orch;
	}

	createConnection(options) {
		try {
			return net.createConnection(options);
		} catch (err) {
			return err.response;
		}
	}
}
