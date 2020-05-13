import {MessageManager} from './MessageManager';
import WebWorker from 'web-worker:./Worker.ts';

function main(): void {
    const messageManager = new MessageManager('This instance was created on the main thread');

    const worker = new WebWorker();
    worker.postMessage({type: 'init', args: 'This instance was created in a worker'});

    messageManager.sayHello('main thread');
    worker.postMessage({type: 'exec', func:'sayHello', args: 'web worker'});

    messageManager.printMessage();
    worker.postMessage({type: 'exec', func:'printMessage', args: null});
}

window.addEventListener('DOMContentLoaded', () => {
    main();
});

