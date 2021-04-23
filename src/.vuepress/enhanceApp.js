import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCaretDown, faCheck, faClock, faCog, faCopy, faDownload, faEllipsisV, faEraser, faExclamationCircle, faFileExport, faFileImport, faHandPointRight, faHeadphones, faInfoCircle, faMusic, faPause, faPen, faPlay, faPlayCircle, faPlus, faShare, faSlidersH, faStar, faStop, faTimes, faTrash, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faCaretDown, faCheck, faClock, faCog, faCopy, faDownload, faEllipsisV, faEraser, faExclamationCircle, faFileExport, faFileImport, faHandPointRight, faHeadphones, faInfoCircle, faMusic, faPause, faPen, faPlay, faPlayCircle, faPlus, faShare, faSlidersH, faStar, faStop, faTimes, faTrash, faVolumeMute);

export default ({ Vue, options, router, siteData }) => {
  Vue.component("fa", FontAwesomeIcon);
}
