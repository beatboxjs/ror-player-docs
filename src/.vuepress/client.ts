import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCaretDown, faCheck, faClock, faCog, faCopy, faDownload, faEllipsisV, faEraser, faExclamationCircle, faFileExport, faFileImport, faHandPointRight, faHeadphones, faInfoCircle, faMusic, faPause, faPen, faPlay, faPlayCircle, faPlus, faShare, faSlidersH, faStar, faStop, faTimes, faTrash, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineClientConfig } from '@vuepress/client';
import Btn from './components/btn.vue';

library.add(faBars, faCaretDown, faCheck, faClock, faCog, faCopy, faDownload, faEllipsisV, faEraser, faExclamationCircle, faFileExport, faFileImport, faHandPointRight, faHeadphones, faInfoCircle, faMusic, faPause, faPen, faPlay, faPlayCircle, faPlus, faShare, faSlidersH, faStar, faStop, faTimes, faTrash, faVolumeMute);

export default defineClientConfig({
	enhance: ({ app }) => {
		app.component("fa", FontAwesomeIcon);
		app.component("btn", Btn);
	}
});
