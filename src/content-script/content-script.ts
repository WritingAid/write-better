import { Logger } from '../shared/logger';
import { Message } from '../shared/shared';
import { WriteBetter } from './writebetter';

const TAG = "content-script.ts"
const Log = new Logger(TAG);
const writeBetter = new WriteBetter();

const injectedCode = `(function() {window['_docs_annotate_canvas_by_ext'] = 'kbfnbcaeplbcioakkpcpgfkobkghlhen';})();`;
const script = document.createElement('script');
script.textContent = injectedCode;
(document.head||document.documentElement).appendChild(script);
// script.remove();

/*
This script is started after loading when document is idle.
The browser chooses a time to inject scripts between "document_end" and immediately after the window.onloadevent fires. The exact moment of injection depends on how complex the document is and how long it is taking to load, and is optimized for page load speed.
Content scripts running at "document_idle" do not need to listen for the window.onload event, they are guaranteed to run after the DOM is complete.
*/
const init = () => {
    if (writeBetter.isGoogleDocs()) {
        Log.debug("Analyzing google docs.");
        const targetNode = document.querySelector('.kix-paginateddocumentplugin') as HTMLElement;
        writeBetter.analyzeAndWatch(targetNode);
        return;
    }

    // Check for textarea

    // Check for contenteditable
    const contentEditables = document.querySelectorAll('[contenteditable=true]');
    // TODO: if there are more than 1, need to be careful about placing icon.
    if(contentEditables.length > 0) {
        Log.debug("Analyzing contenteditables, count: ", contentEditables.length);
        contentEditables.forEach( contentEditable => writeBetter.analyzeAndWatch(contentEditable as HTMLElement));
    }
    

    // TODO: needs a ways to stop this when plugin is disabled (though disabling not part of v1.). 
}

const onMessage = (msg: Message, _: chrome.runtime.MessageSender, callback: (response?: any) => void) => {
    console.debug('content-script received message: ', msg.type);
    if (msg.type === 'analyze_doc') {
        init();
        callback(true);
    } else if (msg.type === 'cleanup') {
        writeBetter.cleanup();
    }
}

chrome.runtime.onMessage.addListener(onMessage);

// Run the script once added to the doc and user enabled it.
init();